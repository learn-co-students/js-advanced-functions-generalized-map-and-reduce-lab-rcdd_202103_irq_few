// Add your functions here
function map(array, function1) {
    return array.map(element => function1(element))
}

function reduce(array, number1, start=0) {
    let newarray = (!!start) ? start : array[0] //existing equation 
    let i = (!!start) ? 0 : 1

    for (; i < array.length; i++) {
      newarray = number1(array[i], newarray)
    }

    return newarray;
}
