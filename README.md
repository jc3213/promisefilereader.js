## Usage

### Download
[Latest](https://jc3213.github.io/promisefilereader.js/filereader.js)

### HTML
```HTML
<script src="https://jc3213.github.io/promisefilereader.js/filereader.js"></script>
```

### TamperMonkey
```javascript
// @require https://jc3213.github.io/promisefilereader.js/filereader.js
```

## Syntax
```javascript
let promisedReader = new PromiseFileReader();
```

## Method
- [text](#text)
- [json](#json)
- [base64](#base64)
- [dataURL](#dataURL)
- [arrayBuffer](#arrayBuffer)
- [binaryString](#binaryString)

### text
```javascript
let testResult = promisedReader.text(file);
```
- textResult
    - Promise object, which returns text contents of the file as `string` if fulfilled

### json
```javascript
let jsonResult = promisedReader.json(file);
```
- jsonResult
    - Promise object, which returns the contents of the file as a `JSON` object if fulfilled

### dataURL
```javascript
let dataResult = promisedReader.dataURL(file);
```
- dataResult
    - Promise object, which returns a `data:` URL representing the file's content if fulfilled

### base64
```javascript
let base64Result = promisedReader.base64(file);
```
- base64Result
    - Promise object, which returns base64 encoded `string` of the file's content if fulfilled

### arrayBuffer
```javascript
let bufferResult = promisedReader.arrayBuffer(file);
```
- bufferResult
    - Promise object, which returns an `ArrayBuffer` representing the file's content if fulfilled

### binaryString
```javascript
let binaryResult = promisedReader.binaryString(file);
```
- binaryResult
    - Promise object, which returns the raw binary `string` data of the file's content if fulfilled
