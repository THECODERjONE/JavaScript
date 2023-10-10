function palindromeChecker(str) {
    let cleanStr = str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, '');
    let reverseStr = cleanStr
    .split('')
    .reverse()
    .join('');
    return cleanStr === reverseStr;
}