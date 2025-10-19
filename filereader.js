class PromiseFileReader {
    static #read (method, blob) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onload = (event) => resolve(event.target.result);
            reader.onerror = reject;
            reader[method](blob);
        });
    }
    static text (blob) {
        return PromiseFileReader.#read('readAsText', blob);
    }
    static arrayBuffer (blob) {
        return PromiseFileReader.#read('readAsArrayBuffer', blob);
    }
    static binaryString (blob) {
        return PromiseFileReader.#read('readAsBinaryString', blob);
    }
    static dataURL (blob) {
        return PromiseFileReader.#read('readAsDataURL', blob);
    }
    static json (blob) {
        return PromiseFileReader.text(blob).then((string) => JSON.parse(string));
    }
    static base64 (blob) {
        return PromiseFileReader.dataURL(blob).then((string) => string.slice(string.indexOf(',') + 1));
    }
}
