function isLucky(number) {
    let numStr = number.toString();
    if (numStr.length !== 6) {
        return false;
    }
    let firstSum = (numStr[0] - '0') + (numStr[1] - '0') + (numStr[2] - '0');
    let secondSum = (numStr[3] - '0') + (numStr[4] - '0') + (numStr[5] - '0');
    return firstSum === secondSum;
}
console.log(isLucky(234801)); 