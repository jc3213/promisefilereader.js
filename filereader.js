class PromiseFileReader {
    static #read (method, file) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onload = (event) => resolve(event.target.result);
            reader.onerror = reject;
            reader[method](file);
        });
    }
    static text (file) {
        return PromiseFileReader.#read('readAsText', file);
    }
    static arrayBuffer (file) {
        return PromiseFileReader.#read(file, 'readAsArrayBuffer');
    }
    static binaryString (file) {
        return PromiseFileReader.#read(file, 'readAsBinaryString');
    }
    static dataURL (file) {
        return PromiseFileReader.#read(file, 'readAsDataURL');
    }
    static json (file) {
        return PromiseFileReader.#read(file, 'readAsText').then((str) => JSON.parse(str));
    }
    static base64 (file) {
        return PromiseFileReader.#read(file, 'readAsDataURL').then((str) => str.slice(str.indexOf(',') + 1));
    }
}
