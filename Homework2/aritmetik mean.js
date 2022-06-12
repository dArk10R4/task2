function arithmeticMean(a) {
    let cem = 0;
     if(Array.isArray(a)) { 
        for (let num of a) {
        cem += num
    }
} 
return cem/a.length
}