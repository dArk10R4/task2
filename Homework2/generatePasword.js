// generatePassword
function generatePassword(passwordLength) {
    let a = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
    let pasword = "";
    for (let i = 0; i < passwordLength; i++) {
        pasword =  pasword.concat("",a[Math.floor(Math.random()*a.length)]);
    }
    return pasword;
}