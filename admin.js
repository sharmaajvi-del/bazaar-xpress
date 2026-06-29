import {
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
db
} from "./firebase.js";

const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productCategory = document.getElementById("productCategory");
const productDescription = document.getElementById("productDescription");
const saveProduct = document.getElementById("saveProduct");

saveProduct.addEventListener("click", async () => {

const product = {
name: productName.value,
price: Number(productPrice.value),
category: productCategory.value,
description: productDescription.value
};

try{

await addDoc(collection(db,"products"),product);

alert("✅ Product Saved Successfully");

productName.value="";
productPrice.value="";
productDescription.value="";

}catch(error){

alert(error.message);

}

});
