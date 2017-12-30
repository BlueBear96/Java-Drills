function shortWords(array) {
  // your code goes here
   return array.filter(function(word) {
    return word.length < 5;
  });
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testFunctionWorks(fn, input, expected) {
  const result = fn(input);
  if (
    result &&
    result.length === expected.length &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })
  ) {
    console.log('SUCCESS: `' + fn.name + '` works!');
    return true;
  } else {