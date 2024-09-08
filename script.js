let products = [];
let cards = document.querySelector(".cards");

let getProducts = new Promise((suc, fail) => {
    fetch("https://dummyjson.com/products?limit=10")
    .then((response) => response.json())
    .then((data) => {
    suc(data["products"]);
    })
    .catch((er) => fail("No Data fetched"));
});

function redirectToDetails(productId) {
    window.location.href = `Details.html?id=${productId}`;
    }

getProducts.then((data) => {
    products = data;
    for (let product of products) {
    cards.innerHTML += `
    <div class="card" onclick="redirectToDetails(${product.id})">
        <img src="${product.thumbnail}" alt="product" />
        <h3>${product.title}</h3>
        <p>${product.price}</p>
    </div>`;
    } 
});

