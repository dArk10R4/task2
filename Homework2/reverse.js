function reverse(a) {
    let arr = [];
    if (Array.isArray(a)) {
        for (let i = a.length-1; i >= 0; i--) {
            arr.push(a[i]);
        }
    }
    return arr;
}