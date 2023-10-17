function caesarCipher(str, shift) {
  let shiftedStr = '';
  for(let i = 0; i < str.length; i++) {
      const char = str[i];
      if (/[a-zA-Z]/.test(char)) {
        const isUpperCase = char === char.toUpperCase();
        const charCode = char.charCodeAt(0);
        const shiftedCharCode = isUpperCase
        ? ((charCode - 65 + shift) % 26) + 65
        : ((charCode - 97 + shift) % 26) + 97;
        const shiftedChar = String.fromCharCode(shiftedCharCode);
        shiftedStr += shiftedChar;
      } else {
                shiftedStr += char;
      }
  }
    return shiftedStr;
}