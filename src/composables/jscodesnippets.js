import { ref } from 'vue'

export const jscodesnippets = ref([
  {
    id: 0,
    title: 'how to capitalize text',
    code: 'const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;',
    description: 'Capitalizing strings is not a built-in feature of JavaScript. To fix this, we can make a capitalize function which accepts some text and makes the first letter uppercase, then appends the rest of the string. This one-liner is useful for just about every kind of text you want to capitalize. I use it most frequently with displaying users names.',
    tags: ['string']
  },
  {
    id: 1,
    title: 'cool stuff 2',
    code: 'code goes here',
    description: 'description for the code',
    tags: ['string']
  },
  {
    id: 3,
    title: 'cool stuff 3',
    code: 'code goes here',
    description: 'description for the code'
  }
])
