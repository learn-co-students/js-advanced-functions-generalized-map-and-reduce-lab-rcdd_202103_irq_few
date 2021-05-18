// Add your functions here
const map = (sourceArray, fn)=>{
  let newArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    let element = sourceArray[i]
    newArray.push(fn(element))
  }
  return newArray
};

const reduce = (sourceArray, fn, begin)=>{
  if (begin) {
      let entire = begin
      for (let i = 0; i < sourceArray.length; i++) {
        let element = sourceArray[i]
        entire = fn(entire, element)
      }
      return entire
  }
  else {
      let total = sourceArray[0]
      for (let i = 1; i < sourceArray.length; i++) {
        let element = sourceArray[i]
        total = fn(total, element)
      }
      return total
  }

};

