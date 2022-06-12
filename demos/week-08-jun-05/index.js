import { foodItems } from './food-items.js';

const cart = [];

const filterByCategory = ( category ) => {
    return foodItems.filter( item => item.category === category );
};

const findById = ( itemId ) => {
    return foodItems.find( item => item.id === itemId );
};

const findItemInCart = ( itemId ) => {
    return cart.find( cartItem => cartItem.item.id === itemId );
}

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
                        <div class="category-item" data-id="${item.id}">
                            <div class="category-item-actions">
                                <i class="fa-solid fa-star"> ${item.rating}</i>
                                <i class="fa-solid fa-heart add-item-to-cart"></i>
                            </div>
                            <img src="${item.img}" alt="${item.name}" />
                            <div>${item.name}</div>
                            <div>Price: $${item.price}</div>
                        </div>
                    `
                }
            );

            // console.log( itemsHTML );

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

function bindListeners() {
    const addItemToCartButtons = document.querySelectorAll( '.add-item-to-cart' );

    // console.log( addItemToCartButtons );

    addItemToCartButtons.forEach(
        button => {
            button.addEventListener( 'click', function() {
                // the button (icon) which was clicked
                // console.log( this );

                this.classList.add( 'fa-heart-selected' );

                const itemEl = this.closest( '.category-item' );
                // console.log( itemEl );

                const itemId = parseInt( itemEl.getAttribute( 'data-id' ) );
                console.log( itemId );

                const item = findById( itemId );
                console.log( item );

                // check if item exists in the cart
                if( findItemInCart( itemId ) ) {
                    alert( 'This items is already in the cart' );
                } else {
                    cart.push({
                        qty: 1,
                        // item: item
                        item
                    });
                }

                console.log( cart );
            });
        }
    )
}

bindListeners();