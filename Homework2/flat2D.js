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