
var now = new Date().getTime();
var stepTime = localStorage.getItem('stepTime');


if (stepTime == null){
    localStorage.setItem('stepTime',now);

}
else{
    if (now -stepTime>hours*60*60*1000){
        localStorage.clear();
        localStorage.setItem('stepTime',now);

    }
}


var orders = JSON.parse(localStorage.getItem('orders'));
var total = localStorage.getItem('total');


if (orders === null || orders === undefined){
    localStorage.setItem('orders', JSON.stringify([]));
    orders = JSON.parse(localStorage.getItem('orders'));
    

}


if (total === null || total === undefined){
    localStorage.setItem('total', 0);
    orders = JSON.parse(localStorage.getItem('total'));
    
}
var cart = document.querySelector('#cartt');
    cart.innerHTML = orders.length;
