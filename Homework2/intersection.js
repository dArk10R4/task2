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