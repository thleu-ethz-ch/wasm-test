onmessage = function(e) {
    const task = e.data[0];
    const first = e.data[1];
    const last = e.data[2];
    if (e.data[0] === 'runjs') {
        let sum = 0;
        for (let number = first; number <= last; ++number) {
            sum += Math.sqrt(number);
        }
        postMessage(sum);
    } else {
        self.importScripts("test.js");
        Module.onRuntimeInitialized = () => {
            postMessage(_sum(first, last))
        }
    }
}