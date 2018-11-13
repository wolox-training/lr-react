// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(expect) {
    return new Promise(resolve => setTimeout(() => resolve(expect)), reject => setTimeout(() => reject(Error()), expect));
}

export function asyncDelay(a) {
        return new Promise((resolve) => { resolve(a); });
}
