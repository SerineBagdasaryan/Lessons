function findMissingDigits(phoneNumber) {
    var missingDigits = [];
    var allDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (var i = 0; i < allDigits.length; i++) {
        if (!customIncludes(phoneNumber, allDigits[i])) {
            missingDigits.push(allDigits[i]);
        }
    }
    return missingDigits;
}
console.log(findMissingDigits('094446467'));
function customIncludes(data, el) {
    for (var i = 0; i < data.length; i++) {
        if (data[i] === el) {
            return true;
        }
    }
    return false;
}
