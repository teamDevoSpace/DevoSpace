
function postData(data, sheetName) {
    return new Promise((resolve, reject) => {
        const apiKey = '8uzsf2nufvk56y3vhr146ms62ddl81nw5sd7z2mv';
        const url = 'https://sheetdb.io/api/v1/p9qi9j98ii8r7?sheet=' + sheetName;
        
        const requestData = {
            requestID: generateUUID(),
            timeStamp: new Date().toISOString(),
            ...data,
        };

        axios.post(url, requestData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + apiKey
            }
        }).then(response => {
            resolve(response.data); // Resolve the promise with the response data
        }).catch(error => {
            reject(error); // Reject the promise with the error
        });
    });
}


function generateUUID() {
    const crypto = window.crypto || window.msCrypto; // For browser compatibility
    const buffer = new Uint8Array(16);
    crypto.getRandomValues(buffer);

    // Set version (4) and variant (Random)
    buffer[6] = (buffer[6] & 0x0f) | 0x40;
    buffer[8] = (buffer[8] & 0x3f) | 0x80;

    return (
        bufferToHex(buffer.subarray(0, 4)) +
        bufferToHex(buffer.subarray(4, 6)) +
        bufferToHex(buffer.subarray(6, 8)) +
        bufferToHex(buffer.subarray(8, 10)) +
        bufferToHex(buffer.subarray(10))
    );
}

function bufferToHex(buffer) {
    return Array.from(buffer, byte => byte.toString(16).padStart(2, '0')).join('');
}




