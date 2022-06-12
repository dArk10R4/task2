// sum
function sum  (a) {
    let  cem= 0 ;
    if (Array.isArray(a)) {
     for (let i =0; i < a.length; i++) {
         cem += a[i];
     } }
     return cem
 }