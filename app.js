// Bazaar Xpress App

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product){

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

alert(product.name + " added to cart");

}

function getCart(){

return JSON.parse(localStorage.getItem("cart")) || [];

}

function clearCart(){

localStorage.removeItem("cart");

}

function getProduct(id){

return products.find(p => p.id == id);

}
