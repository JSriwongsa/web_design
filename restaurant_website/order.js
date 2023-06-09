import {foodItem} from "./items.js";

function displayItems(){
    var appetizer = document.getElementById('appetizer');
    var soup = document.getElementById('soup');
    var salad = document.getElementById('salad');
    var nigiri = document.getElementById('nigiri');
    var sushi = document.getElementById('sushi');
    var maki = document.getElementById('maki');
    var don = document.getElementById('don');
    var drink = document.getElementById('drink');
    var dessert = document.getElementById('dessert');

    const appetizerData = foodItem.filter(item => item.category == 'appetizer');
    const soupData = foodItem.filter(item => item.category == 'soup');
    const saladData = foodItem.filter(item => item.category == 'salad');
    const nigiriData = foodItem.filter(item => item.category == 'nigiri');
    const sushiData = foodItem.filter(item => item.category == 'sushi');
    const makiData = foodItem.filter(item => item.category == 'maki');
    const donData = foodItem.filter(item => item.category == 'don');
    const drinkData = foodItem.filter(item => item.category == 'drink');
    const dessertData = foodItem.filter(item => item.category == 'dessert');

    appetizerData.map(item => {
        var itemBox = document.createElement('div');
        itemBox.setAttribute('id', 'item-box');
        
        var boxTop = document.createElement('div');
        boxTop.setAttribute('id', 'box-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' '+ item.rating;

        var addcart = document.createElement('i');
        addcart.setAttribute('class', 'fa-solid fa-cart-plus add-to-cart');
        addcart.setAttribute('id', item.id);
        
        boxTop.appendChild(star);
        boxTop.appendChild(addcart);

        var img = document.createElement('img');
        img.src = item.img;

        var orderName = document.createElement('p');
        orderName.setAttribute('id', 'order-name');
        orderName.innerText = item.name;

        var orderPrice = document.createElement('p');
        orderPrice.setAttribute('id', 'order-price');
        orderPrice.innerText = 'Price : $ ' + item.price;

        itemBox.appendChild(boxTop);
        itemBox.appendChild(img);
        itemBox.appendChild(orderName);
        itemBox.appendChild(orderPrice);

        appetizer.appendChild(itemBox);
    })
    soupData.map(item => {
        var itemBox = document.createElement('div');
        itemBox.setAttribute('id', 'item-box');
        
        var boxTop = document.createElement('div');
        boxTop.setAttribute('id', 'box-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' '+ item.rating;

        var addcart = document.createElement('i');
        addcart.setAttribute('class', 'fa-solid fa-cart-plus add-to-cart');
        addcart.setAttribute('id', item.id);
        
        boxTop.appendChild(star);
        boxTop.appendChild(addcart);

        var img = document.createElement('img');
        img.src = item.img;

        var orderName = document.createElement('p');
        orderName.setAttribute('id', 'order-name');
        orderName.innerText = item.name;

        var orderPrice = document.createElement('p');
        orderPrice.setAttribute('id', 'order-price');
        orderPrice.innerText = 'Price : $ ' + item.price;

        itemBox.appendChild(boxTop);
        itemBox.appendChild(img);
        itemBox.appendChild(orderName);
        itemBox.appendChild(orderPrice);

        soup.appendChild(itemBox);
    })
    saladData.map(item => {
        var itemBox = document.createElement('div');
        itemBox.setAttribute('id', 'item-box');
        
        var boxTop = document.createElement('div');
        boxTop.setAttribute('id', 'box-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' '+ item.rating;

        var addcart = document.createElement('i');
        addcart.setAttribute('class', 'fa-solid fa-cart-plus add-to-cart');
        addcart.setAttribute('id', item.id);
        
        boxTop.appendChild(star);
        boxTop.appendChild(addcart);

        var img = document.createElement('img');
        img.src = item.img;

        var orderName = document.createElement('p');
        orderName.setAttribute('id', 'order-name');
        orderName.innerText = item.name;

        var orderPrice = document.createElement('p');
        orderPrice.setAttribute('id', 'order-price');
        orderPrice.innerText = 'Price : $ ' + item.price;

        itemBox.appendChild(boxTop);
        itemBox.appendChild(img);
        itemBox.appendChild(orderName);
        itemBox.appendChild(orderPrice);

        salad.appendChild(itemBox);
    })
    nigiriData.map(item => {
        var itemBox = document.createElement('div');
        itemBox.setAttribute('id', 'item-box');
        
        var boxTop = document.createElement('div');
        boxTop.setAttribute('id', 'box-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' '+ item.rating;

        var addcart = document.createElement('i');
        addcart.setAttribute('class', 'fa-solid fa-cart-plus add-to-cart');
        addcart.setAttribute('id', item.id);
        
        boxTop.appendChild(star);
        boxTop.appendChild(addcart);

        var img = document.createElement('img');
        img.src = item.img;

        var orderName = document.createElement('p');
        orderName.setAttribute('id', 'order-name');
        orderName.innerText = item.name;

        var orderPrice = document.createElement('p');
        orderPrice.setAttribute('id', 'order-price');
        orderPrice.innerText = 'Price : $ ' + item.price;

        itemBox.appendChild(boxTop);
        itemBox.appendChild(img);
        itemBox.appendChild(orderName);
        itemBox.appendChild(orderPrice);

        nigiri.appendChild(itemBox);
    })
    sushiData.map(item => {
        var itemBox = document.createElement('div');
        itemBox.setAttribute('id', 'item-box');
        
        var boxTop = document.createElement('div');
        boxTop.setAttribute('id', 'box-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' '+ item.rating;

        var addcart = document.createElement('i');
        addcart.setAttribute('class', 'fa-solid fa-cart-plus add-to-cart');
        addcart.setAttribute('id', item.id);
        
        boxTop.appendChild(star);
        boxTop.appendChild(addcart);

        var img = document.createElement('img');
        img.src = item.img;

        var orderName = document.createElement('p');
        orderName.setAttribute('id', 'order-name');
        orderName.innerText = item.name;

        var orderPrice = document.createElement('p');
        orderPrice.setAttribute('id', 'order-price');
        orderPrice.innerText = 'Price : $ ' + item.price;

        itemBox.appendChild(boxTop);
        itemBox.appendChild(img);
        itemBox.appendChild(orderName);
        itemBox.appendChild(orderPrice);

        sushi.appendChild(itemBox);
    })
    makiData.map(item => {
        var itemBox = document.createElement('div');
        itemBox.setAttribute('id', 'item-box');
        
        var boxTop = document.createElement('div');
        boxTop.setAttribute('id', 'box-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' '+ item.rating;

        var addcart = document.createElement('i');
        addcart.setAttribute('class', 'fa-solid fa-cart-plus add-to-cart');
        addcart.setAttribute('id', item.id);
        
        boxTop.appendChild(star);
        boxTop.appendChild(addcart);

        var img = document.createElement('img');
        img.src = item.img;

        var orderName = document.createElement('p');
        orderName.setAttribute('id', 'order-name');
        orderName.innerText = item.name;

        var orderPrice = document.createElement('p');
        orderPrice.setAttribute('id', 'order-price');
        orderPrice.innerText = 'Price : $ ' + item.price;

        itemBox.appendChild(boxTop);
        itemBox.appendChild(img);
        itemBox.appendChild(orderName);
        itemBox.appendChild(orderPrice);

        maki.appendChild(itemBox);
    })
    donData.map(item => {
        var itemBox = document.createElement('div');
        itemBox.setAttribute('id', 'item-box');
        
        var boxTop = document.createElement('div');
        boxTop.setAttribute('id', 'box-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' '+ item.rating;

        var addcart = document.createElement('i');
        addcart.setAttribute('class', 'fa-solid fa-cart-plus add-to-cart');
        addcart.setAttribute('id', item.id);
        
        boxTop.appendChild(star);
        boxTop.appendChild(addcart);

        var img = document.createElement('img');
        img.src = item.img;

        var orderName = document.createElement('p');
        orderName.setAttribute('id', 'order-name');
        orderName.innerText = item.name;

        var orderPrice = document.createElement('p');
        orderPrice.setAttribute('id', 'order-price');
        orderPrice.innerText = 'Price : $ ' + item.price;

        itemBox.appendChild(boxTop);
        itemBox.appendChild(img);
        itemBox.appendChild(orderName);
        itemBox.appendChild(orderPrice);

        don.appendChild(itemBox);
    })
    drinkData.map(item => {
        var itemBox = document.createElement('div');
        itemBox.setAttribute('id', 'item-box');
        
        var boxTop = document.createElement('div');
        boxTop.setAttribute('id', 'box-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' '+ item.rating;

        var addcart = document.createElement('i');
        addcart.setAttribute('class', 'fa-solid fa-cart-plus add-to-cart');
        addcart.setAttribute('id', item.id);
        
        boxTop.appendChild(star);
        boxTop.appendChild(addcart);

        var img = document.createElement('img');
        img.src = item.img;

        var orderName = document.createElement('p');
        orderName.setAttribute('id', 'order-name');
        orderName.innerText = item.name;

        var orderPrice = document.createElement('p');
        orderPrice.setAttribute('id', 'order-price');
        orderPrice.innerText = 'Price : $ ' + item.price;

        itemBox.appendChild(boxTop);
        itemBox.appendChild(img);
        itemBox.appendChild(orderName);
        itemBox.appendChild(orderPrice);

        drink.appendChild(itemBox);
    })
    dessertData.map(item => {
        var itemBox = document.createElement('div');
        itemBox.setAttribute('id', 'item-box');
        
        var boxTop = document.createElement('div');
        boxTop.setAttribute('id', 'box-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' '+ item.rating;

        var addcart = document.createElement('i');
        addcart.setAttribute('class', 'fa-solid fa-cart-plus add-to-cart');
        addcart.setAttribute('id', item.id);
        
        boxTop.appendChild(star);
        boxTop.appendChild(addcart);

        var img = document.createElement('img');
        img.src = item.img;

        var orderName = document.createElement('p');
        orderName.setAttribute('id', 'order-name');
        orderName.innerText = item.name;

        var orderPrice = document.createElement('p');
        orderPrice.setAttribute('id', 'order-price');
        orderPrice.innerText = 'Price : $ ' + item.price;

        itemBox.appendChild(boxTop);
        itemBox.appendChild(img);
        itemBox.appendChild(orderName);
        itemBox.appendChild(orderPrice);

        dessert.appendChild(itemBox);
    })
}
displayItems();


document.querySelectorAll('.add-to-cart').forEach(item => {
    item.addEventListener('click', addToCart);
})

var cartData = [];

function addToCart(){
    var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
    var itemObject = foodItem.find(element => element.name == itemToAdd);
    var index = cartData.indexOf(itemObject);
    if(index === -1){
        document.getElementById(itemObject.id).classList.add('toggle-cart');
        cartData = [...cartData, itemObject];
    }
    else if(index > -1){
        alert("Added to cart");
    }

    document.getElementById('shopping-cart').innerText = '' +cartData.length + 'Items';
    //document.getElementById('m-shopping-cart').innerText = '' +cartData.length;

    totalAmount();
    cartItems()
}

function cartItems(){
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    cartData.map(item => {
        var tableRow = document.createElement('tr');
        var rowData1 = document.createElement('td');
        var img = document.createElement('img');
        img.src = item.img;
        rowData1.appendChild(img);

        var rowData2 = document.createElement('td');
        rowData2.innerText = item.name;

        var rowData3 = document.createElement('td');
        var btn1 = document.createElement('button');
        btn1.setAttribute('class','remove-item');
        btn1.innerHTML = '-';
        var span = document.createElement('span');
        span.innerText = item.quantity;
        var btn2 = document.createElement('button');
        btn1.setAttribute('class','add-item');
        btn1.innerHTML = '+';
        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        var rowData4 = document.createElement('td');
        rowData4.innerText = item.price;

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow);
    })
    document.querySelectorAll('.add-item').forEach(item => {
        item.addEventListener('click', addItem);
    })
    document.querySelectorAll('.remove-item').forEach(item => {
        item.addEventListener('click', removeItem);
    })
}

var currentPrice = 0;

function addItem(){
    let itemToAdd = this.parentNode.previousSibliing.innerText;
    console.log(itemToAdd);

    var addObject = cartData.find(element => element.name = itemToAdd);
    addObject.quantity += 1;

    currentPrice = (addObject.price*addObject.quantity - addObject.price*(addObject.quantity - 1))/(addObject.quantity - 1);

    addObject.price = currentPrice*addObject.quantity;
    totalAmount();
    cartItems();
}

var flag = false;

function removeItem(){
    let itemToRemove = this.parentNode.previousSibliing.innerText;
    let removeObject = cartData.find(element => element.name == itemToRemove);
    let ind = cartData.indexOf(removeObject);
    if(removeObject.quantity > 1){
        currentPrice = (removeObject.price*removeObject.quantity - removeObject*price*(removeObject.quantity - 1))/(removeObject.quantity);
    }
    else {
        document.getElementById(removeObject.id).classList.remove('cart-toggle');
        cartData.splice(ind,1);
        document.getElementById('shopping-cart').innerHTML = '' + cartData.length + 'Items';
        //document.getElementById('m-shopping-cart').innerHTML = '' + cartData.length;

        if(cartData.length < 1 && flag){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            //document.getElementById('m-shopping-cart').classList.toggle('m-cart-toggle');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            //document.getElementById('category-header').classList.toggle('toggle-category'); //----------------------------------------
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag = false;
            alert('Currently no item in the cart');
        }
    }
    totalAmount();
    cartItems();
}

function totalAmount(){
    var sum = 0;
    cartData.map(item => {
        sum += item.price;
    })
    document.getElementById('total-item').innerText = 'Items :' + cartData.length;
    document.getElementById('total-price').innerText = 'Total Amount : $ ' + sum;
}
document.getElementById('shopping-cart').addEventListener('click', cartToggle);
document.getElementById('m-shopping-cart').addEventListener('click', cartToggle);

function cartToggle(){
    if(cartData.length > 0){
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        //document.getElementById('m-shopping-cart').classList.toggle('m-cart-toggle');
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        //document.getElementById('category-header').classList.toggle('toggle-category'); //----------------------------------------
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag = true;
    }
    else {
        alert('Currently no item in the cart');
    }
}