// Function to add a game to the cart
function addToCart(gameName, gamePrice) {
    const game = { name: gameName, price: gamePrice };

    // Get the cart from localStorage (or initialize it if not present)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the selected game to the cart
    cart.push(game);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Alert user that the item has been added to the cart
    alert(gameName + " has been added to your cart.");
}

// Function to display the cart items on the Cart page
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartItemsContainer.innerHTML = ''; // Clear previous items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('col-md-4');
        itemElement.innerHTML = `
            <div class="card game-card">
                <div class="card-body text-center">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">$${item.price}</p>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
}

// Function to remove a game from the cart
function removeFromCart(gameName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== gameName);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Function to clear all items from the cart
function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
}

// Display the cart when the page loads
document.addEventListener('DOMContentLoaded', function () {
    displayCart();

    // Checkout Button functionality
    document.getElementById('checkout-btn').addEventListener('click', function () {
        alert('Proceeding to checkout...');
    });

    // Clear Cart Button functionality
    document.getElementById('clear-cart-btn').addEventListener('click', function () {
        clearCart();
    });
});
