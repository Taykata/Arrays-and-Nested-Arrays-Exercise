function printEveryNthElementFromAnArray(arr, n) {

    let myArr = [];

    for (let i = 0; i <= arr.length - 1; i += n) {
        myArr.push(arr[i]);
    }

    return myArr;

}

printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2);