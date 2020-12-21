var txtUrlEncodeInput;
var txtUrlEncodeOutput;
var txtB64EncodeInput;
var txtB64EncodeOutput;
var txtSha256HashInput;
var txtSha256HashOutput;

var btnUrlEncode;
var btnUrlDecode;
var btnB64Encode;
var btnB64Decode;
var btnSha256Hash;

function urlEncode() {
  txtUrlEncodeOutput.value = encodeURI(txtUrlEncodeInput.value);
}

function urlDecode() {
  txtUrlEncodeInput.value = decodeURI(txtUrlEncodeOutput.value);
}

function b64Encode() {
  txtB64EncodeOutput.value = btoa(txtB64EncodeInput.value);
}

function b64Decode() {
  txtB64EncodeInput.value = atob(txtB64EncodeOutput.value);
}

function Sha256Hash() {
  txtSha256HashOutput.value = CryptoJS.SHA256(txtSha256HashInput.value);
}

function addEventListeners() {
  btnUrlEncode.addEventListener('click', urlEncode);
  btnUrlDecode.addEventListener('click', urlDecode);
  btnB64Encode.addEventListener('click', b64Encode);
  btnB64Decode.addEventListener('click', b64Decode);
  btnSha256Hash.addEventListener('click', Sha256Hash);
}

document.addEventListener("DOMContentLoaded", function() {

  txtUrlEncodeInput = document.getElementById("txtUrlEncodeInput");
  txtUrlEncodeOutput = document.getElementById("txtUrlEncodeOutput");
  txtB64EncodeInput = document.getElementById("txtB64EncodeInput");
  txtB64EncodeOutput = document.getElementById("txtB64EncodeOutput"); 
  txtSha256HashInput = document.getElementById("txtSha256HashInput");
  txtSha256HashOutput = document.getElementById("txtSha256HashOutput");

  btnUrlEncode = document.getElementById("btnUrlEncode");
  btnUrlDecode = document.getElementById("btnUrlDecode");
  btnB64Encode = document.getElementById("btnB64Encode");
  btnB64Decode = document.getElementById("btnB64Decode");
  btnSha256Hash = document.getElementById("btnSha256Hash");

  addEventListeners();
});