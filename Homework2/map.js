//  map
function map (arr,fun) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        a.push(fun(arr[i],i,arr));
    }
    return a;
}