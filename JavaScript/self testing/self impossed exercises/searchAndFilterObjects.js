function filterObj(objArr, src) {
    let auxArr = objArr.slice();
    return auxArr.filter(obj => {
        return Object.keys(src).every(key => {
            return obj.hasOwnProperty(key) && obj[key] === src[key];
        });
    });
}