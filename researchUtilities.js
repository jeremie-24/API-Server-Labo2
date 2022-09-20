exports.valueMatch = valueMatch;
function valueMatch(value, searchValue) {
    try {
        return new RegExp('^' + searchValue.toLowerCase().replace(/\*/g, '.*') + '$').test(value.toString().toLowerCase());
    } catch (error) {
        console.log(error);
        return false;
    }
}
exports.compareNum = compareNum;
function compareNum(x, y) {
    if (x === y) return 0;
    else if (x < y) return -1;
    return 1;
}
exports.innerCompare = innerCompare;
function innerCompare(x, y) {
    if ((typeof x) === 'string')
        return x.localeCompare(y);
    else
        return this.compareNum(x, y);
}