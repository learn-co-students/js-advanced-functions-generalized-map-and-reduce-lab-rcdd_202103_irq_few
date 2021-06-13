// Add your functions here
function map(src, cb) {
  let newArray = []

  for (let i = 0; i < src.length; i++) {
    let theElement = src[i]
    newArray.push(cb(theElement))
  }

  return newArray;
}

function reduce(src, cb, starting){
  let x = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    x = cb(src[i], x)
  }

  return x;
}