function sortingNumbers(arr) {

    let myArr = [];
    let sortedArr = arr.sort((a, b) => a - b);

    while (sortedArr.length) {
        myArr.push(sortedArr.shift());
        myArr.push(sortedArr.pop());
    }

    return myArr;

}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));