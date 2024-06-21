import { describe, it, expect, vi } from 'vitest';
import { computed, reactive, reactiveSource } from './reactive';

describe('reactiveSource', () => {
    it('should return a reactive source with the initial value', () => {
        const initialValue = 10;
        const source = reactiveSource(initialValue);
        expect(source.value).to.equal(initialValue);
    });

    it('should update the value when assigned a new value', () => {
        const initialValue = 10;
        const newValue = 20;
        const source = reactiveSource(initialValue);
        source.value = newValue;
        expect(source.value).to.equal(newValue);
    });

    it('should notify change handlers when the value is updated', () => {
        let notifiedValue: number | undefined;
        const initialValue = 10;
        const newValue = 20;
        const source = reactiveSource(initialValue);
        source.onChanged((instance) => {
            notifiedValue = instance.value;
        });
        source.value = newValue;
        expect(notifiedValue).to.equal(newValue);
    });

    it('should not notify change handlers when the value is not updated', () => {
        let notifiedValue: number | undefined;
        const initialValue = 10;
        const source = reactiveSource(initialValue);
        source.onChanged((instance) => {
            notifiedValue = instance.value;
        });
        source.value = initialValue;
        expect(notifiedValue).to.be.undefined;
    });

    it('should remove change handlers when offChanged is called', () => {
        let notifiedValue: number | undefined;
        const initialValue = 10;
        const newValue = 20;
        const source = reactiveSource(initialValue);
        const changeHandler = (instance: any) => {
            notifiedValue = instance.value;
        };
        source.onChanged(changeHandler);
        source.value = newValue;
        expect(notifiedValue).to.equal(newValue);
        notifiedValue = undefined;
        source.offChanged(changeHandler);
        source.value = initialValue;
        expect(notifiedValue).to.be.undefined;
    });
});
describe('reactive', () => {
    it('should return a reactive value with the initial value', () => {
        const initialValue = 10;
        const reactiveValue = reactive(() => initialValue);
        expect(reactiveValue.value).to.equal(initialValue);
    });

    it('should update the value when assigned a new value', () => {
        const initialValue = 10;
        const newValue = 20;
        const source = reactiveSource(initialValue);
        const reactiveValue = reactive(() => source.value);
        source.value = newValue;
        expect(reactiveValue.value).to.equal(newValue);
    });

    it('should notify change handlers when the value is updated', () => {
        let notifiedValue: number | undefined;
        const initialValue = 10;
        const newValue = 20;
        const source = reactiveSource(initialValue);
        const reactiveValue = reactive(() => source.value);
        reactiveValue.onChanged((instance) => {
            notifiedValue = instance.value;
        });
        source.value = newValue;
        expect(notifiedValue).to.equal(newValue);
    });

    it('should not notify change handlers when the value is not updated', () => {
        let notifiedValue: number | undefined;
        const initialValue = 10;
        const source = reactiveSource(initialValue);
        const reactiveValue = reactive(() => source.value);
        reactiveValue.onChanged((instance) => {
            notifiedValue = instance.value;
        });
        source.value = initialValue;
        expect(notifiedValue).to.be.undefined;
    });

    it('should remove change handlers when offChanged is called', () => {
        let notifiedValue: number | undefined;
        const initialValue = 10;
        const newValue = 20;
        const source = reactiveSource(initialValue);
        const reactiveValue = reactive(() => source.value);
        const changeHandler = (instance: any) => {
            notifiedValue = instance.value;
        };
        reactiveValue.onChanged(changeHandler);
        source.value = newValue;
        expect(notifiedValue).to.equal(newValue);
        notifiedValue = undefined;
        reactiveValue.offChanged(changeHandler);
        source.value = initialValue;
        expect(notifiedValue).to.be.undefined;
    });


    it("should not recalculate the value when the dependencies don't change", () => {
        const initialValue = 10;
        const dependencyValue = reactiveSource(initialValue);
        const computeFunc = vi.fn(() => dependencyValue.value * 2);

        const reactiveValue = reactive(() => computeFunc());
        expect(reactiveValue.value).to.equal(initialValue * 2);
        expect(computeFunc).toBeCalledTimes(1);
        expect(reactiveValue.value).to.equal(initialValue * 2);
        expect(computeFunc).toBeCalledTimes(1);
    });

    it("should recalculate only the source value has been changed", () => {
        const initialValue = 10;
        const dependencyValue = reactiveSource(initialValue);
        const dependencyValue2 = reactiveSource(initialValue);
        const computeFunc = vi.fn(() => dependencyValue.value * 2);
        const reactiveValue = reactive(() => computeFunc());
        const computeFunc2 = vi.fn(() => reactiveValue.value * 2 + dependencyValue2.value);
        const reactiveValue2 = reactive(() => computeFunc2());

        expect(reactiveValue2.value).to.equal(initialValue * 4 + initialValue);
        expect(computeFunc).toBeCalledTimes(1);
        expect(reactiveValue2.value).to.equal(initialValue * 4 + initialValue);
        expect(computeFunc2).toBeCalledTimes(1);
        dependencyValue2.value = 20;
        // The value should not be calculated until evaluated.
        expect(computeFunc2).toBeCalledTimes(1);
        expect(computeFunc).toBeCalledTimes(1);
        expect(reactiveValue2.value).to.equal(initialValue * 4 + 20);
        // The value should be calculated only once only its needed.
        expect(computeFunc2).toBeCalledTimes(2);
        expect(computeFunc).toBeCalledTimes(1);
    });
});
describe('computed', () => {
    it('should return the computed value', () => {
        const initialValue = 10;
        const computedValue = computed(() => initialValue * 2);
        expect(computedValue()).to.equal(initialValue * 2);
    });

    it('should update the computed value when dependencies change', () => {
        const initialValue = 10;
        const dependencyValue = reactiveSource(initialValue);
        const computedValue = computed(() => dependencyValue.value * 2);
        expect(computedValue()).to.equal(initialValue * 2);

        dependencyValue.value = 20;
        expect(computedValue()).to.equal(20 * 2);
    });

    it('should not update the computed value when dependencies do not change', () => {
        const initialValue = 10;
        const dependencyValue = reactiveSource(initialValue);
        const computedValue = computed(() => dependencyValue.value * 2);
        expect(computedValue()).to.equal(initialValue * 2);

        dependencyValue.value = initialValue;
        expect(computedValue()).to.equal(initialValue * 2);
    });

});