console.log('utils.js is running');

export const square = (x) => x*x;
export const add = (a, b) => a+b;

export default (a, b) => a - b;

// ! can't come before constant
// export default subtract;

// ! only one default export can be there
// export { square, add, subtract as default }; 

// we can use export keyword as defined above to export functions

// ! exports - default export - named exports;