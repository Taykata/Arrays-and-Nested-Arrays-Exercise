function rotateArray(arr, rotates) {

    for (let i = 1; i <= rotates; i++) {
        let el = arr.pop();
        arr.unshift(el);
    }

    console.log(arr.join(' '));

}

rotateArray(['1', '2', '3', '4'], 2);