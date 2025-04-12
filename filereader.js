class PromiseFileReader {
    version = '0.1';
    text (file) {
        return PromiseFileReader.read(file, 'readAsText');
    }
    dataURL (file) {
        return PromiseFileReader.read(file, 'readAsDataURL');
    }
    arrayBuffer (file) {
        return PromiseFileReader.read(file, 'readAsArrayBuffer');
    }
    binaryString (file) {
        return PromiseFileReader.read(file, 'readAsBinaryString');
    }
    json (file) {
        return PromiseFileReader.read(file, 'readAsText').then((str) => JSON.parse(str));
    }
    base64 (file) {
        return PromiseFileReader.read(file, 'readAsDataURL').then((str) => str.slice(str.indexOf(',') + 1));
    }
    static read (file, method) {
        return new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.onload = (event) => resolve(event.target.result);
            reader.onerror = reject;
            reader[method](file);
        });
    }
}
