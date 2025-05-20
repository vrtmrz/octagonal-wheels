import { describe, it, expect } from "vitest";
import { Connector } from "./connector";

describe("Connector.funcOf", () => {
    it("should connect and invoke a function", async () => {
        const conn = Connector.funcOf<[number, number], number>("add");
        conn.connect((a, b) => a + b);
        const result = await conn.invoke(2, 3);
        expect(result).toBe(5);
    });

    it("should wait for function to be connected before invoking", async () => {
        const conn = Connector.funcOf<[string], string>("echo");
        const promise = conn.invoke("hello");
        setTimeout(() => {
            conn.connect((msg) => msg + " world");
        }, 10);
        const result = await promise;
        expect(result).toBe("hello world");
    });
    it("should share the same name function", async () => {
        const conn = Connector.funcOf<[number], number>("double");
        conn.connect((n) => n * 2);
        const result = await conn.invoke(4);
        const conn2 = Connector.funcOf<[number], number>("double");
        expect(conn2).toBe(conn);
        const result2 = await conn2.invoke(4);
        expect(result2).toBe(8);
        expect(result).toBe(8);
    });
    it("should be able to invoke synchronously if connected", () => {
        const conn = Connector.funcOf<[number], number>("sync");
        conn.connect((n) => n * 2);
        const result = conn.invokeSync(4);
        expect(result).toBe(8);
    });
    it("should throw if invoked synchronously before connected", () => {
        const conn = Connector.funcOf<[number], number>("sync2");
        expect(() => conn.invokeSync(4)).toThrowError();
    });
    it("should able to disconnect and set a new function", async () => {
        const conn = Connector.funcOf<[number], number>("disconnect");
        conn.connect((n) => n * 2);
        const result = await conn.invoke(4);
        expect(result).toBe(8);
        conn.disconnect();
        conn.connect((n) => n * 3);
        const result2 = await conn.invoke(4);
        expect(result2).toBe(12);
    });
    it("should disconnect automatically if the function is set twice", async () => {
        const conn = Connector.funcOf<[number], number>("autoDisconnect");
        conn.connect((n) => n * 2);
        const result = await conn.invoke(4);
        expect(result).toBe(8);
        conn.connect((n) => n * 3);
        const result2 = await conn.invoke(4);
        expect(result2).toBe(12);
    });
});

describe("Connector.instanceOf", () => {
    it("should connect and retrieve an instance", async () => {
        const obj = { value: 42 };
        const conn = Connector.instanceOf<typeof obj>("obj");
        conn.connect(obj);
        const instance = await conn.connected();
        expect(instance.value).toBe(42);
    });

    it("should wait for instance to be connected", async () => {
        const conn = Connector.instanceOf<{ foo: string }>("delayed");
        const promise = conn.connected();
        setTimeout(() => {
            conn.connect({ foo: "bar" });
        }, 10);
        const instance = await promise;
        expect(instance.foo).toBe("bar");
    });
    it("should share the same name instance", async () => {
        const obj = { value: 42 };
        const conn = Connector.instanceOf<typeof obj>("shared");
        conn.connect(obj);
        const instance = await conn.connected();
        const conn2 = Connector.instanceOf<typeof obj>("shared");
        expect(conn2).toBe(conn);
        const instance2 = await conn2.connected();
        expect(instance2).toBe(instance);
        expect(instance2.value).toBe(42);
    });
    it("should be able to disconnect and set a new instance", async () => {
        const obj = { value: 42 };
        const conn = Connector.instanceOf<typeof obj>("disconnect");
        conn.connect(obj);
        const instance = await conn.connected();
        expect(instance.value).toBe(42);
        conn.disconnect();
        const newObj = { value: 100 };
        conn.connect(newObj);
        const instance2 = await conn.connected();
        expect(instance2.value).toBe(100);
    });
    it("should disconnect automatically if the instance is set twice", async () => {
        const obj = { value: 42 };
        const conn = Connector.instanceOf<typeof obj>("autoDisconnect");
        conn.connect(obj);
        const instance = await conn.connected();
        expect(instance.value).toBe(42);
        const newObj = { value: 100 };
        conn.connect(newObj);
        const instance2 = await conn.connected();
        expect(instance2.value).toBe(100);
    });
});
