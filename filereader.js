class PromiseFileReader {
    reader (file, method) {
        return new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.onload = (event) => resolve(event.target.result);
            reader.onerror = reject;
            reader[method](file);
        });
    }
    text (file) {
        return this.reader(file, 'readAsText');
    }
    dataURL (file) {
        return this.reader(file, 'readAsDataURL');
    }
    arrayBuffer (file) {
        return this.reader(file, 'readAsArrayBuffer');
    }
    binaryString (file) {
        return this.reader(file, 'readAsBinaryString');
    }
    json (file) {
        return this.reader(file, 'readAsText').then((str) => JSON.parse(str));
    }
    base64 (file) {
        return this.reader(file, 'readAsDataURL').then((str) => str.slice(str.indexOf(',') + 1));
    }
}
