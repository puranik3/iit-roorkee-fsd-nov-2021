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
            let itemsHTML = '';

            // form a list of divs for items in this category (itemsHTML)
            filterByCategory( category ).forEach(
                item => {
                    itemsHTML += `
                        <div class="category-item">
                            <div class="category-item-actions">
                                <i class="fa-solid fa-star"> ${item.rating}</i>
                                <i class="fa-solid fa-heart"></i>
                            </div>
                            <img src="${item.img}" alt="${item.name}" />
                            <div>${item.name}</div>
                            <div>Price: $${item.price}</div>
                        </div>
                    `
                }
            );

            console.log( itemsHTML );

            // render HTML for a category and its items
            main.innerHTML += `
                <section class="category">
                    <h3>${category}</h3>
                    <div class="category-items">${itemsHTML}</div>
                </section>
            `
        }
    )
}

showItemsByCategory();