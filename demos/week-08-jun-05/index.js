import { foodItems } from './food-items.js';

// array of categories with dupliactes
const categoriesArrayDuplicates = foodItems.map( item => item.category );
const categoriesSet = new Set( categoriesArrayDuplicates );

// array of categories without duplicates
const categories = Array.from( categoriesSet );

console.log( categories );