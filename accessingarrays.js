function accessFirstItem(array) {
  // your code goes here
  return array[0];
}

function accessThirdItem(array) {
  // your code goes here
  return array[2];
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testFunctionWorks(fn, input, expected) {
  if (fn(input) === expected) {
    console.log(`SUCCESS: "${fn.name}" works on [${input}]`);
    return true;
  } else {
    console.log(
      `FAILURE: ${fn.name}([${input}]) should be ${expected} but was ${fn(
        input
      )}`