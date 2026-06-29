import { db } from "./firebase.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const productList = document.getElementById("productList");

async function loadProducts() {

  const querySnapshot = await getDocs(collection(db, "products"));

  let html = "";

  querySnapshot.forEach((doc) => {

    const product = doc.data();

    html += `
    <div class="card">

      <img src="${product.image || 'https://via.placeholder.com/300'}">

      <h2>${product.name}</h2>

      <p>${product.description}</p>

      <div class="price">₹${product.price}</div>

      <button>
        View Product
      </button>

    </div>
    `;

  });

  productList.innerHTML = html;

}

loadProducts();
