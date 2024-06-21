const throttle = (func, timeout) => {
    let timer;
    let lastTime = 0; // initialize lastTime to 0
    return (...args) => {
        if (!lastTime) {
            func(...args);
            lastTime = Date.now();
        }
        else {
            clearTimeout(timer);
            const delayTime = timeout - (Date.now() - lastTime);
            timer = setTimeout(() => {
                func(...args);
                lastTime = Date.now();
            }, delayTime);
        }
    };
};

export { throttle };
