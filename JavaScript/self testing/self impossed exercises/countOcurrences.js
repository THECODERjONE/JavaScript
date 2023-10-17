function countOccurrences(arr) {
    let repeats = {};
    for(let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if(repeats[item]) {
            repeats[item]++;
        } else {
            repeats[item] = 1;
        }
    }
    return repeats;
  }