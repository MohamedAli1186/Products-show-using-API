let product = document.querySelector(".product");
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

let getProduct = new Promise((success, failed) => {
    fetch(`https://dummyjson.com/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        success(data);
    })
    .catch((error) => failed("Failed to fetch data"));
});

getProduct.then((data) => {
    product.innerHTML = `
        <img
        src="${data.thumbnail}"
        alt=""
        />

        <div class="product__info">
        <h2 class="product__title">
        ${data.title}
        </h2>
        <p class="product__description">
        ${data.description}
        </p>
        <p class="product__price">$${data.price}</p>
        <button class="product__button">Add to cart</button>
        </div>`;
});
