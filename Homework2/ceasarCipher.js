// ceasarCipher
function ceasarCipher(text,key) {
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let new_pasword = "";
    for (let i = 0; i < text.length; i++) {
        if(text[i].toLowerCase() == text[i]) {
            for (let j = 0; j < 26; j++) {
                if(a.toLowerCase()[j] === text[i]) {
                    new_pasword = new_pasword.concat("",a.toLowerCase()[j + key]);
                }
            }
        }
        else {
            for (let j = 0; j < 26; j++) {
                if(a[j] === text[i]) {
                    new_pasword = new_pasword.concat("",a[j + key]);
                }
            }
        }
    }
    return new_pasword;
}