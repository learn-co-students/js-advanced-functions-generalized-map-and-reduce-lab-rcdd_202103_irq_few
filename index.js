// Add your functions here
function map(arr, callArray) {
let result = [];
for (let i = 0; i < arr.length; i++) {
result.push(callArray(arr[i]));
}
return result;
}
function reduce(arr, callArray, start) {
let accArray = start ? start : arr[0];
let i = start ? 0 : 1;

for (; i < arr.length; i++) {
accArray = callArray(arr[i], accArray);
}
return accArray;
}
