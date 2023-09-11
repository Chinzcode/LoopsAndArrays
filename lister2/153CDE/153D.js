decryptText('MUKBU');

function decryptText(text) {
    let decryptedText = '';
    for (let i = 0; i < text.length; i++) {
        let x = text.charAt(i); 
        let y = secretCode.indexOf(x); 
        let z = alphabet[y]; 
        decryptedText += z;
    }
    console.log('MUKBU =', decryptedText);
}