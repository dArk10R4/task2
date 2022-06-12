function euclideanDistance (x,y) {
    let distance = 0;
    if (Array.isArray(x) && Array.isArray(y)) {
        distance = Math.sqrt(Math.pow((x[0] - y[0]),2) + Math.pow((x[1] - y[1]),2 ));
    }
    return distance;
}