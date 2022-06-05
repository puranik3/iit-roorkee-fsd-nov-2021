import { foodItems } from './food-items.js';

const filterByCategory = ( category ) => {
    return foodItems.filter( item => item.category === category );
};

// array of categories with duplicates
const categoriesArrayDuplicates = foodItems.map( item => item.category );
const categoriesSet = new Set( categoriesArrayDuplicates );

// array of categories without duplicates
const categories = Array.from( categoriesSet );

const showItemsByCategory = () => {
    const main = document.querySelector( '.main' );

    categories.forEach(
        category => {
            main.innerHTML += `
                <section class="category-items">
                    <h3>${category}</h3>
                </section>
            `
        }
    )
}

showItemsByCategory();