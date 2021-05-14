// Add your functions here

function map(sourceArray, functions){
  return sourceArray.map(functions);
}

function reduce(sourceArray, functions, startingPoint=0){
  if(startingPoint=="0") return sourceArray.reduce(functions);
  else return sourceArray.reduce(functions, startingPoint);
}