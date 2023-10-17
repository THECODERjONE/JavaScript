function findMissingInt(arr) {
if (arr.length === 0) {
    return undefined;
    }
for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== (i + 1)) {
        return i + 1;
        }      
    }
    return "No missing ints.";       
}