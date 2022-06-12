// sum
function sum  (a) {
   let  cem= 0 ;
   if (Array.isArray(a)) {
    for (let i =0; i < a.length; i++) {
        cem += a[i];
    } }
    return cem
}
// random
function random(lower,upper) { 
    return Math.floor(Math.random()*(upper-lower) + lower)
}
//aritmetik mean
function arithmeticMean(a) {
    let cem = 0;
     if(Array.isArray(a)) { 
        for (let num of a) {
        cem += num
    }
} 
return cem/a.length
}
// geometrik mean
function  geometricMean (a) {
   let  h_o= 1;
   if(Array.isArray(a)) {
       for (num of a) {
           h_o = h_o*num ;
       }
   }
   return Math.pow(h_o,1/a.length);
}
// euclideanDistance
function euclideanDistance (x,y) {
    let distance = 0;
    if (Array.isArray(x) && Array.isArray(y)) {
        distance = Math.sqrt(Math.pow((x[0] - y[0]),2) + Math.pow((x[1] - y[1]),2 ));
    }
    return distance;
}
//pickOne
function pickOne (arr) {
    return arr[random(0,arr.length)];
}
//includes 
function includes (a,b) {
    if (Array.isArray(a)) {
        for (let elem of a) {
            if (elem === b ) {
                return true;
            }
        }
    }
    return false;
}
// unique
function unique(a) {
    let arr= [];
    for (let i = 0; i < a.length; i++) {
        if (!includes(arr,a[i])) {
            arr.push(a[i]);
        }
    }
    return arr;
}
// intersection
function  intersection(a,b) {
    let array1= [];
    if (Array.isArray(a) && Array.isArray(b)){
    for (let i = 0; i < b.length; i++) {
        if (includes(a,b[i])) {
            array1.push(b[i]);
        }     
    }
    }
    return unique(array1);
}
// flat2D
function  flat2D (a) {
    let arr=[];
    if (Array.isArray(a)) { 
         for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            arr.push(a[i][j]);
        }
    }
} 
    return arr;
}
// union
function union (a,b) {
    let arr = [];
    if (Array.isArray(a)) { 
    for (let i of a) {
        arr.push(i);
    } if (Array.isArray(b)) { 
    for (let j of b) {
        arr.push(j);
    }}}
    return unique(arr);

}
// reverse
function reverse(a) {
    let arr = [];
    if (Array.isArray(a)) {
        for (let i = a.length-1; i >= 0; i--) {
            arr.push(a[i]);
        }
    }
    return arr;
}
//  map
function map (arr,fun) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        a.push(fun(arr[i],i,arr));
    }
    return a;
}
// filter
function filter(arr,func) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i],i,arr)) {
            a.push(arr[i]);
        }
    }
    return a;
}
// find
function  find(arr,func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i],i,arr)) {
            return arr[i];
        }
    }
}
// some
function some(arr,func) {
    for (let i = 0; i < arr.length; i++) {
        if(func(arr[i],i,arr)) {
            return true;
        }
    }
    return false;
}
//  every
function every(arr,func) {
    for (let i = 0; i < arr.length; i++) {
        if(!func(arr[i],i,arr)) {
            return false;
        }
    }
    return true;
}
// reduce
function reduce(arr,func,init) {
    let acc = init;
    for (let i = 0; i < arr.length; i++) {
        acc = func(acc,arr[i],i,arr);
    }
    return acc;
}
// generatePassword
function generatePassword(passwordLength) {
    let a = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
    let pasword = "";
    for (let i = 0; i < passwordLength; i++) {
        pasword =  pasword.concat("",a[Math.floor(Math.random()*a.length)]);
    }
    return pasword;
}
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