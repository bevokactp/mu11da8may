// a working file for run debug development localy

const DEBUG = true;
function ppp(...args) {
    if (DEBUG) {
        const handler = {
            get: (target, prop) => {
                if (prop === 'log') {
                    return function(...args) {
                        console.log('[DEBUG]', ...args);
                    };
                }
                return target[prop];
            }
        };
        const customConsole = new Proxy(console, handler);
        customConsole.log(...args);
    }
}

