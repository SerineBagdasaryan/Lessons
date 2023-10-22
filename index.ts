function findMissingDigits(phoneNumber: string): string[] {
    const missingDigits: string[] = [];

    const allDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (let i = 0; i < allDigits.length; i++) {
        if (!customIncludes(phoneNumber, allDigits[i])) {
            missingDigits.push(allDigits[i]);
        }
    }

    return missingDigits;
}

console.log(findMissingDigits('094446467'));

function customIncludes<T extends string, V>(data: T, el: V): boolean {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === el) {
            return true;
        }
    }
    return false;
}
