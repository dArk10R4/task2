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