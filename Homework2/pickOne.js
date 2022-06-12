function random(lower,upper) { 
    return Math.floor(Math.random()*(upper-lower) + lower)
}
function pickOne (arr) {
    return arr[random(0,arr.length)];
}
