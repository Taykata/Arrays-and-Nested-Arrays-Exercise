function addAndRemoveElements(arr) {

    let myArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            myArr.push(i + 1);
        } else {
            myArr.pop();
        }
    }

    if (myArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(myArr.join('\n'));
    }

}

addAndRemoveElements(['add', 'add', 'add', 'add']);