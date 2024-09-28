document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    // Function to update the cart in localStorage and re-render
    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    // Function to render the cart items
    function renderCart() {
        cartItemsContainer.innerHTML = ''; // Clear the container
        totalPrice = 0;

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                
                <p>${item.name}</p>
                <div class="quantity-control">
                    <button onclick="decreaseQuantity(${index})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity(${index})">+</button>
                </div>
                <p>$${(item.price * item.quantity).toFixed(2)}</p>
            `;

            cartItemsContainer.appendChild(cartItem);

            // Update total price
            totalPrice += item.price * item.quantity;
        });

        // Display total price
        totalPriceEl.textContent = totalPrice.toFixed(2);
    }

    // Increase item quantity
    window.increaseQuantity = function (index) {
        cart[index].quantity++;
        updateCart();
    }

    // Decrease item quantity
    window.decreaseQuantity = function (index) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            // Remove item if quantity is 0
            cart.splice(index, 1);
        }
        updateCart();
    }

    // Initial render
    renderCart();
});
