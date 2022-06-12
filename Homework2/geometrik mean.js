function  geometricMean (a) {
    let  h_o= 1;
    if(Array.isArray(a)) {
        for (num of a) {
            h_o = h_o*num ;
        }
    }
    return Math.pow(h_o,1/a.length);
 }