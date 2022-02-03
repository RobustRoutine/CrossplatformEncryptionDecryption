var aesjs = require('aes-js');
var base64 = require('js-base64');


var data = "Encryption from JS and decryption from JAVA successful.";
var key = "123456qwerty1234654321qwerty1234";
var iv = "123456qwerty1234";

var keyBytes = aesjs.utils.utf8.toBytes(key);
var ivBytes = aesjs.utils.utf8.toBytes(iv);


function encrypt(data) {
    var aesCbc = new aesjs.ModeOfOperation.cbc(keyBytes, ivBytes);
    var dataBytes = aesjs.utils.utf8.toBytes(data);
    var padded = aesjs.padding.pkcs7.pad(dataBytes);
    var encryptedBytes = aesCbc.encrypt(padded);      //encrypts data
    return base64.encode(encryptedBytes)              //encodes encrypted data and returns
}


console.log(encrypt(data));
