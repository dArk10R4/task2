function reduce(arr,func,init) {
    let acc = init;
    for (let i = 0; i < arr.length; i++) {
        acc = func(acc,arr[i],i,arr);
    }
    return acc;
}