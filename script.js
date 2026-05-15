let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({name, price});
  total += price;

  const li = document.createElement('li');
  li.textContent = `${name} - ${price}€`;
  document.getElementById('cart-items').appendChild(li);

  document.getElementById('total').textContent = total;
}

function checkout() {
  alert("Paiement sécurisé simulé !");
}
