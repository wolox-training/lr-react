// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(expect) {
    const timeNow = Date.now();
    return new Promise((resolve, reject) => {
      if (expect > 5000) {
        reject(new Error('This time is too much !'));
      } else {
        setTimeout(() => {
          resolve(Date.now() - timeNow);
        }, expect);
      }
    });
   }

export function asyncDelay(a) {
        return new Promise((resolve) => { resolve(a); });
}
