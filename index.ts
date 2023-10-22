function isPalindrome(num: number): boolean {
    if(num < 0) return false;
    let reverse = 0;
    let originalNum = num;
    while (num > 0) {
        reverse = reverse * 10 + num % 10;
        num = Math.floor(num/ 10);
    }

    return reverse === originalNum;
}

console.log(isPalindrome(1221));