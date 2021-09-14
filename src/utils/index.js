// Developed by entebyt
// For more visit the github repo - https://github.com/entebyt/reusable-components-functions
// function checks whether the object is Empty
// pass an object in function arguments and will return a boolean value
//
export function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

// It splits a string into an array
export function splitString(text) {
  // sample regex /[\s,]+/
  let strings = text.split(/[\s,]+/);
  return strings;
}
