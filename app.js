const products = [
    {
        id: 1,
        name: "HP OmniBook 7 16 laptop",
        price: 6500,
        image: "https://m.media-amazon.com/images/I/71TAKmQQG5L._AC_SY355_.jpg"
    },
    {
        id: 2,
        name: "iPhone 15",
        price: 8500,
        image: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone_15_hero.png"
    },
    {
        id: 3,
        name: "Razer Viper v3 Pro (Noir)",
        price: 1899,
        image: "https://www.ultrapc.ma/40200-large_default/razer-viper-v3-pro-noir.jpg"
    },
    {
        id: 4,
        name: "razer huntsman mini",
        price: 1200,
        image: "https://i5.walmartimages.com/asr/3d421baf-805a-4abe-b537-4b39db0dd3be.36f7b5c2ef9d58e97e940a85f5a710e3.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF"
    }
];

function displayProducts(items) {
    const container = document.getElementById("product-list");

    container.innerHTML = items.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p class="price">${product.price} DH</p>
            <button class="add-btn" onclick="addToCart(${product.id})">
                🛒 Ajouter au panier
            </button>
            

        </div>
    `).join("");
}

// Feature/Cart

// <p class="price">${product.price} DH</p>








// FEATURE: PRODUCT SEARCH

document.getElementById("search-area").innerHTML = `
    <input
        type="text"
        id="search"
        class="search-input"
        placeholder="🔍 Rechercher un produit..."
    >
`;

document.getElementById("search").addEventListener("input", function(e) {

    const keyword = e.target.value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(keyword)
    );

    displayProducts(filteredProducts);

});




displayProducts(products);



// FEATURE: SHOPPING CART

let cart = [];

function addToCart(productId) {

    const product = products.find(p => p.id === productId);

    cart.push(product);

    updateCart();
}

function updateCart() {

    const cartSection = document.getElementById("cart-section");

    const itemsHTML = cart.map(product => `
        <div class="cart-item">
            ${product.name} — ${product.price} DH
        </div>
    `).join("");

    // BUG INTENTIONNEL
    const total = cart.reduce(
        (sum, product) => sum + product.price,
        0
    );

    cartSection.innerHTML = `
        <div class="cart-box">
            <h2>🛒 Mon Panier</h2>

            ${itemsHTML}

            <p class="total">
                Total : ${total} DH
            </p>
        </div>
    `;
}