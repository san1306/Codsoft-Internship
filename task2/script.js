let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartCount = cart.length;

// Initialize cart count
document.getElementById('cart-count').textContent = cartCount;

// Function to add item to the cart
function addToCart(itemId, itemPrice) {
    // Find if the item is already in the cart
    let existingItem = cart.find(item => item.id === itemId);

    if (existingItem) {
        // If the item is already in the cart, increase the quantity
        existingItem.quantity++;
    } else {
        // Add a new item with quantity = 1
        const newItem = {
            id: itemId,
            name: getItemName(itemId), // Use the helper function for the item name
            price: itemPrice,
            quantity: 1 // Only keep quantity
        };
        cart.push(newItem);
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count in the header
    document.getElementById('cart-count').textContent = cart.length;

    // Show the pop-up message
    showPopup('Item successfully added to your cart!');
}

// Helper function to get item name based on itemId
function getItemName(itemId) {
    switch (itemId) {
        case 'cappuccino':
            return 'Cappuccino';
        case 'vegan-salad':
            return 'Vegan Salad';
        case 'Toast':
            return 'Ube Breakfast Toast';
        case 'Macarons':
            return 'Macarons (Single)';
        case 'Cream Cheese Bagel':
            return 'Cream Cheese Bagel';
        case 'Ube Latte':
            return 'Ube Latte';
        case 'Botanical Cupcakes':
            return 'Botanical Cupcakes (Box of 2)';
        case 'Floral Latte':
            return 'Floral Latte';
        case 'Lasagna':
            return 'Lasagna';
        case 'Aglio e olio':
            return 'Aglio e Olio';
        case 'Sushi':
            return 'Suhsi';
        case 'Shawarma':
            return 'Shawarma';
        default:
            return 'Unknown Item';
    }
}

// Function to display pop-up message
function showPopup(message) {
    const popup = document.getElementById('popup-message');
    popup.textContent = message;
    popup.classList.remove('hidden');
    popup.classList.add('show');

    // Hide the pop-up after 2 seconds
    setTimeout(() => {
        popup.classList.remove('show');
        popup.classList.add('hidden');
    }, 2000);
}
