encryptAndDecryptText('TRYM', alphabet, secretCode);
encryptAndDecryptText('MKTF', secretCode, alphabet);

function encryptAndDecryptText(text, list1, list2) {
    let inputText = '';
    for (let i = 0; i < text.length; i++) {
        let x = text.charAt(i); 
        let y = list1.indexOf(x); 
        let z = list2[y]; 
        inputText += z;
    }
    console.log(inputText);
}