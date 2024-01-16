function extractIncreasingSubsequenceFromArray(arr) {

    let myArr = [];
    let biggestNum = arr.shift();
    myArr.push(biggestNum);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= biggestNum) {
            biggestNum = arr[i];
            myArr.push(biggestNum);
        }
    }

    return myArr;

}

console.log(extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));