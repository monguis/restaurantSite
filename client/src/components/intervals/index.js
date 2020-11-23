let interval;

export const startInterval = (cb, milliseconds) => interval = setInterval(cb, milliseconds);

export const stopInterval = () => {
    clearInterval(interval)
};