// Add your functions here
function map (array, funcy) {
    let newArray = [];

    for (let i = 0; i < array.length; i++)
    {
        newArray.push(funcy(array[i]));
    }

    return newArray;
}

function reduce (array, funcy, start) {
    let tmp;

    if(start) {
        tmp = start;
        for (let i = 0; i < array.length; i++) {
            tmp = funcy(array[i], tmp);
        }
    }

    else {
        tmp = array[0];
        for (let i = 1; i < array.length; i++) {
            tmp = funcy(array[i], tmp);
        }
    }
    return tmp;
}