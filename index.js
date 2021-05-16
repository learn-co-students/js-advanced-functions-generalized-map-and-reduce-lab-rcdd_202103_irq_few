// Add your functions here

function map(arr, callBackFunction) {
  
  return arr.map(callBackFunction);
  
}


function reduce(arr, callBackFunction, startingPoint = 0){
  if(startingPoint == "0") 
    return arr.reduce(callBackFunction);
  else 
    return arr.reduce(callBackFunction, startingPoint);
} 



