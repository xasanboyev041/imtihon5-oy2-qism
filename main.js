function buyOnlineTicket() {}

function fetchAndRenderProducts() {
  fetch("products-api-url")
    .then((response) => response.json())
    .then((data) => {
      renderProducts(data);
    })
    .catch((error) => console.error("Error fetching products:", error));
}

function renderProducts(products) {}

document
  .getElementById("onlineTicket")
  .addEventListener("click", buyOnlineTicket);

document
  .getElementById("products")
  .addEventListener("click", fetchAndRenderProducts);
