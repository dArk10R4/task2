function includes (a,b) {
    if (Array.isArray(a)) {
        for (let elem of a) {
            if (elem === b ) {
                return true;
            }
        }
    }
    return false;
}