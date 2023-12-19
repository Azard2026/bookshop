var orders = JSON.parse(localStorage.getItem('orders'));
var cart = document.querySelector('#cartt');
cart.innerHTML = orders.length;