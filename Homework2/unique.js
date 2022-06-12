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