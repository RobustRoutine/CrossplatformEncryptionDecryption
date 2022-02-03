var aesjs = require('aes-js');

var encrypted = "JV/ke/5TN/TiXBnzyonO34I9TRvBXULiB536JtVOyNvrGkuTXZB/ep8N6IDv/MtC8SonpTM9nyfkV0Lskw2ekw";
var key = "123456qwerty1234654321qwerty1234";
var iv = "123456qwerty1234";


var keyBytes = aesjs.utils.utf8.toBytes(key);
var ivBytes = aesjs.utils.utf8.toBytes(iv);


function decrypt(encrypted) {
    // decodes the encoded data
    var decodedBytes = Uint8Array.from(atob(encrypted), c => c.charCodeAt(0));
    var aesCbc = new aesjs.ModeOfOperation.cbc(keyBytes, ivBytes);
    //decrypts the decoded data
    var decryptedBytes = aesCbc.decrypt(decodedBytes);
    return aesjs.utils.utf8.fromBytes(decryptedBytes);
}


console.log(decrypt(encrypted).trimEnd());