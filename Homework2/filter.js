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