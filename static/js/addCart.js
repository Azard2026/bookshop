var orders = JSON.parse(localStorage.getItem('orders'));
var user=document.querySelector('#user').value;
if (user=="AnonymousUser"){
    alert("please login first then only add the books in your cart ");
    window.location.href = '../userlogin';
}
console.log(user);



///update the cart lengh
var cart = document.querySelector('#cartt');
var orders = JSON.parse(localStorage.getItem('orders'));
cart.innerHTML = orders.length;

function clears(){

    localStorage.setItem('orders', JSON.stringify([]));
    orders = JSON.parse(localStorage.getItem('orders'));
    localStorage.setItem('total', 0);
    orders = JSON.parse(localStorage.getItem('total'));
}



function Add_book() {
    alert('item added successfully');
    
    let name=document.querySelector('#bookid').value;
    let price=document.querySelector('#price').value;
    let quentity=1;
    var dprice=price;
    var orders=JSON.parse(localStorage.getItem('orders'));
    var total=localStorage.getItem("total");
    var cartsize=orders.length;
    // save item and total in local storage
    orders[cartsize]=[name,quentity,dprice,price];
    localStorage.setItem('orders',JSON.stringify(orders));

    total=Number(total)+(Number(price)*Number(quentity));
    localStorage.setItem('total',total);

    var cart=document.querySelector('#cartt');
    cart.innerHTML=orders.length;
    console.log(orders.length)

   
}





var names = document.querySelector("#name");
var price = document.querySelector("#price");
var bill = document.querySelector("#total");
var remove = document.querySelector("#remove");
var qty = document.querySelector("#quantity");
var quantity = 1;


function shoppingCart(){


    var orders= JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartSize = orders.length;
    

    names.innerHTML = '<h5>Na</h5>';
    price.innerHTML= '<h5>Price</h5>';
    remove.innerHTML = '<h5><br></h5>';
    //
    qty.innerHTML ='<h5>Quantity</h5>';
    ///quantity
  
    
    
    for (let i=0; i< cartSize; i++){
        
        remove.innerHTML += '<h6 class="mt-3"><button class=btn-danger onclick="removeItem('+i+')">X</button></h6>';
        names.innerHTML += '<h6 class="mt-3">'+orders[i][0]+'</h6>';
        ////qty
        qty.innerHTML +='<h6>'+'<button class="btn btn-danger" onclick="decrement('+i+')">-</button>'+orders[i][1]+'<button class="btn btn-success"  onclick="increment('+i+')">+ </button>'+'</h6>'
        
        // qty.innerHTML += '<h4>'+'<button class=btn-secondary onclick="decrement()">-</button>&nbsp;'+qtys +'&nbsp;<button class=btn-secondary onclick="increment()">+</button></h5>'+'</h4>';
      

        price.innerHTML += '<h6 class="mt-4">'+'₹'+orders[i][2]+'</h6>';
            
    }
    bill.innerHTML = 'Total:₹'+total;
   
    var cart = document.querySelector('#cartt');
    var orders = JSON.parse(localStorage.getItem('orders'));
    cart.innerHTML = orders.length;
    
}

shoppingCart();
//increment quantity function
function increment(n){

    var orders = JSON.parse(localStorage.getItem('orders'));
    //USE IT FOR OVER ALL CALCULATION
    var total = localStorage.getItem('total');
//increase the quentity number
    orders[n][1]+=Number(1);
    // console.log(orders[n][2]);
//adding the price as per the quentity
    orders[n][2]=Number(orders[n][2])+Number(orders[n][3]);
    // console.log(orders[n][3]);
//ADD THE TOTAL
    total = Number(total) + Number(orders[n][3]);
    

    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('total',total);
    shoppingCart();

 }
 //decrement quentity 
 function decrement(n){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');//TOTAL COUNT

    
    //decrease the quentity
    orders[n][1]-=Number(1);
    if (orders[n][1]==0){
        orders[n][1]=1;
        
        total = Number(total)

    }
    else
    {
        total = Number(total) - Number(orders[n][3]);
    }
    // console.log(orders[n][4]);
    //decrease the  price as per the rate
    if(orders[n][2]==Number(orders[n][3]) ||  orders[n][2]<=Number(orders[n][3]) ){
        orders[n][2]=Number(orders[n][3]);
    }
    else{

        orders[n][2]=Number(orders[n][2])-Number(orders[n][3]);

    }
    // if (orders[n][2]!=1){
    
    //     total = Number(total) - Number(orders[n][4]);
    //     log(total)     

    // }
    // while(orders[n][2]<Number(1)){

    //     total = Number(total) - Number(orders[n][4]);
    // }
    // //DECREMENT TOTAL
    
    console.log(n);
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('total',total);

    shoppingCart();

 }

 var cart = document.querySelector('#cartt');
 cart.innerHTML = orders.length;





function removeItem(n)
{
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    total = Number(total)- Number(orders[n][2]);
    orders.splice(n,1);
    //updating  number of the cartsize
    var cart = document.querySelector('#cart');
    cart.innerHTML = orders.length;
    

    localStorage.setItem('orders',JSON.stringify(orders));
    localStorage.setItem('total',total);
    shoppingCart();

}





