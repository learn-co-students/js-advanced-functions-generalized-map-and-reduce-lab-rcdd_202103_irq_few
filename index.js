// Add your functions here
function map(array, func) {
    let retArray = []
    for (const el of array) {
        retArray.push(func(el))
    }
    return retArray
}

function reduce(array, func, startingPoint) {


    let agg
    if (startingPoint) {
        agg = startingPoint
     }  

    for (let i = 0; i < array.length; i++) {

        if (typeof agg === "undefined") {
            agg = func(array[1], array[0])
            i++
        } else {
            agg = func(array[i], agg)
        }

    }

    return agg
} 