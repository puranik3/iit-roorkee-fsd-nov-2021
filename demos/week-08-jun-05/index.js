import { foodItems } from './food-items.js';

let cart = [];

const filterByCategory = ( category ) => {
    return foodItems.filter( item => item.category === category );
};

const findById = ( itemId ) => {
    return foodItems.find( item => item.id === itemId );
};

const findItemInCart = ( itemId ) => {
    return cart.find( cartItem => cartItem.item.id === itemId );
};

const getCartTotal = () => {
    return cart.reduce( ( acc, cartItem ) => acc + cartItem.qty * cartItem.item.price, 0 );
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

function showCart() {
    const cartTBody = document.querySelector( '.cart tbody' );

    // populate the cart table rows
    cartTBody.innerHTML = '';

    cart.forEach(
        cartItem => {
            const { item, qty } = cartItem;

            cartTBody.innerHTML += `
                <tr>
                    <td>
                        <img src="${item.img}" alt="${item.name}" class="cart-item-image" />
                    </td>
                    <td>${item.name}</td>
                    <td>
                        <button class="cart-item cart-item-decrease" onclick="decreaseQty( ${item.id} )">-</button>
                        ${qty}
                        <button class="cart-item-increase" onclick="increaseQty( ${item.id} )">+</button>
                    </td>
                    <td>$${item.price}</td>
                </tr>
            `;
        }
    )
}

function increaseQty( itemId ) {
    findItemInCart( itemId ).qty++;
    showCart();

    console.log( getCartTotal() );
}

function decreaseQty( itemId ) {
    const item = findItemInCart( itemId )
    item.qty--;
    
    if( item.qty === 0 ) {
        cart = cart.filter( i => i.item.id !== itemId );
    }
    
    showCart();
}

window.increaseQty = increaseQty;
window.decreaseQty = decreaseQty;

function bindListeners() {
    const addItemToCartButtons = document.querySelectorAll( '.add-item-to-cart' );
    const cartButton = document.querySelector( '.items' );
    const cartCount = document.querySelector( '.cart-items-count' );
    const addressButton = document.querySelector( '.address' );
    const addressInner = document.querySelector( '.address-inner' );
    const mainPage = document.querySelector( '.main' );
    const cartPage = document.querySelector( '.cart' );

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

                cartCount.innerText = cart.length;

                showCart();

                console.log( 'total = ', getCartTotal() );
            });
        }
    )

    addressButton.addEventListener( 'click', function() {
        const address = prompt( 'Enter your address' );

        if( !address ) {
            alert( 'No address given' );
            return;
        }

        addressInner.textContent = address;
    });

    cartButton.addEventListener( 'click', function() {
        // Check the use of classList.toggle()
        if( mainPage.classList.contains( 'd-none' ) ) {
            cartPage.classList.add( 'd-none' );
            mainPage.classList.remove( 'd-none' )
        } else {
            if( cart.length === 0 ) {
                alert( 'No items in the cart' );
                return;
            }

            cartPage.classList.remove( 'd-none' );
            mainPage.classList.add( 'd-none' )
        }
    });
}

bindListeners();