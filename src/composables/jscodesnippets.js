import { ref, reactive } from 'vue'

export const jscodesnippets = ref([
  {
    title: 'test with functions',
    code: `function updateBrand(obj) {
      // Mutating the object is visible outside the function
      obj.brand = "Toyota";
      // Try to reassign the parameter, but this won't affect
      // the variable's value outside the function
      obj = null;
    }`
  },
  {
    title: 'how to capitalize text',
    code: 'const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;',
    description:
      'Capitalizing strings is not a built-in feature of JavaScript. To fix this, we can make a capitalize function which accepts some text and makes the first letter uppercase, then appends the rest of the string. This one-liner is useful for just about every kind of text you want to capitalize. I use it most frequently with displaying users names.',
    tags: ['string']
  },
  {
    title: 'how to calculate percent',
    code: 'const calculatePercent = (value, total) => Math.round((value / total) * 100)',
    description:
      'Calculating a percent is pretty easy and just involves some simple math. It is an essential task if you want to display user progress, for example in incrementing a progress bar.  calculatePercent accepts a certain amount, divides it by the total amount, then multiplies it by 100. Finally, we use Math.round() to round the result up to the nearest whole number.',
    tags: ['string', 'array']
  },
  {
    title: 'remove duplicates from array',
    code: 'const removeDuplicates = (arr) => [...new Set(arr)];',
    description:
      "Removing duplicate values in an array is an essential task in JavaScript. For example, you might be adding one user to another user's friends list, but you don't want that user to be added or displayed twice. This removeDuplicates function leverages the Set constructor in JavaScript, which removes any duplicate (primitive) values by default. After that, we use the spread operator ... to spread its values into a new array.",
    tags: ['array']
  }
])
