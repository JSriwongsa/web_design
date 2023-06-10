import {foodItem} from "./items.js";

function displayItems(){
    var appetizer = document.getElementById('Appetizer');
    var soup = document.getElementById('Soup');
    var salad = document.getElementById('Salad');
    var nigiri = document.getElementById('Nigiri');
    var sushi = document.getElementById('Sushi-Set');
    var maki = document.getElementById('Maki');
    var don = document.getElementById('Donburi');
    var drink = document.getElementById('Beverage');
    var dessert = document.getElementById('Dessert');

    const appetizerData = foodItem.filter(item => item.category == 'Appetizer');
    const soupData = foodItem.filter(item => item.category == 'Soup');
    const saladData = foodItem.filter(item => item.category == 'Salad');
    const nigiriData = foodItem.filter(item => item.category == 'Nigiri');
    const sushiData = foodItem.filter(item => item.category == 'Sushi-Set');
    const makiData = foodItem.filter(item => item.category == 'Maki');
    const donData = foodItem.filter(item => item.category == 'Donburi');
    const drinkData = foodItem.filter(item => item.category == 'Beverage');
    const dessertData = foodItem.filter(item => item.category == 'Dessert');

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

const categoryListData = [...new Map(foodItem.map(item => [item['category'], item])).values()];
console.log(categoryListData)

function categoryLists(){
    var categoryList = document.getElementById('category-list');

    categoryListData.map(item =>{
        var listMenu = document.createElement('div');
        listMenu.setAttribute('class', 'list-menu');

        var listImg = document.createElement('img');
        listImg.src = item.img;

        var listName = document.createElement('a');
        listName.setAttribute('class', 'list-name');
        listName.innerText = item.category;
        listName.setAttribute('href', '#' + item.category);

        listMenu.appendChild(listImg);
        listMenu.appendChild(listName);

        var cloneListMenu = listMenu.cloneNode(true);
        categoryList.appendChild(listMenu);
        document.querySelector('.category-header').appendChild(cloneListMenu)
    })
}
categoryLists();


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
        console.log(cartData)
    }
    else if(index > -1){
        alert("Added to cart");
    }

    document.getElementById('shopping-cart').innerText = ' ' +cartData.length + 'Items';
    document.getElementById('m-shopping-cart').innerText = '' +cartData.length;

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
        btn1.setAttribute('class','drop-item');
        btn1.innerText = '-';
        var span = document.createElement('span');
        span.innerText = item.quantity;
        var btn2 = document.createElement('button');
        btn2.setAttribute('class','addOn-item');
        btn2.innerText = '+';

        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        var rowData4 = document.createElement('td');
        var rounded_price = parseFloat((Math.round(item.price * 100) / 100).toFixed(2));
        rowData4.innerText = rounded_price;

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow);
    })
    document.querySelectorAll('.addOn-item').forEach(item => {
        item.addEventListener('click', addOnItem);
    })
    document.querySelectorAll('.drop-item').forEach(item => {
        item.addEventListener('click', dropItem);
    })
}

var currentPrice = 0;

function addOnItem(){
    let itemAdd = this.parentNode.previousSibling.innerText;
    
    var addObject = cartData.find(element => element.name == itemAdd);
    addObject.quantity += 1;

    currentPrice = (addObject.price*addObject.quantity - addObject.price*(addObject.quantity - 1))/(addObject.quantity - 1);

    addObject.price = currentPrice*addObject.quantity;
    totalAmount();
    cartItems();
}

var flag = false;

function dropItem(){
    let itemRemove = this.parentNode.previousSibling.innerText;
    let removeObject = cartData.find(element => element.name == itemRemove);
    let ind = cartData.indexOf(removeObject);
    if(removeObject.quantity > 1){
        currentPrice = (removeObject.price*removeObject.quantity - removeObject.price*(removeObject.quantity-1))/(removeObject.quantity);
        removeObject.quantity -= 1;
        removeObject.price = currentPrice*removeObject.quantity;
    }
    else {
        document.getElementById(removeObject.id).classList.remove('toggle-cart');
        cartData.splice(ind,1);
        document.getElementById('shopping-cart').innerHTML = '' + cartData.length + 'Items';
        document.getElementById('m-shopping-cart').innerHTML = '' + cartData.length;

        if(cartData.length < 1 && flag){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('m-shopping-cart').classList.toggle('m-cart-toggle');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('category-header').classList.toggle('toggle-category'); 
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
        let rounded_price = parseFloat((Math.round(item.price * 100) / 100).toFixed(2));
        console.log('item price:' + item.price);
        console.log('rounded price:' + rounded_price);
        sum += rounded_price;
    })
    document.getElementById('total-item').innerText = 'Items :' + cartData.length;
    document.getElementById('total-price').innerText = 'Total Amount : $' + sum;
    document.getElementById('cart-total').innerText = 'Total Amount : $' + sum;
    
}
document.getElementById('shopping-cart').addEventListener('click', cartToggle);
document.getElementById('m-shopping-cart').addEventListener('click', cartToggle);

function cartToggle(){
    if(cartData.length > 0){
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('m-shopping-cart').classList.toggle('m-cart-toggle');
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('category-header').classList.toggle('toggle-category'); 
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag = true;
    }
    else {
        alert('Currently no item in the cart');
    }
}

document.getElementById('add-address').addEventListener('click', addAddress);
document.getElementById('m-add-address').addEventListener('click', addAddress);

function addAddress(){
    var address = prompt('Please enter your address');
    if(address){
        document.getElementById('add-address').innerText = ' '+ address;
        document.getElementById('m-add-address').innerText = ' '+ address;
    }
    else{
        document.getElementById('add-address').innerText = 'Address';
        alert('Please provide your address');
    } 
}

window.onresize = window.onload = function(){
    var size = window.innerWidth;
    if (size < 1200){
        var cloneFoodItems = document.getElementById('food-items').cloneNode(true);
        var cloneCartPage = document.getElementById('cart-page').cloneNode(true);

        document.getElementById('food-items').remove();
        document.getElementById('cart-page').remove();
        document.getElementById('category-header').after(cloneFoodItems);
        document.getElementById('food-items').after(cloneCartPage);
        addEvents();
    }
    if (size >1200){
        var cloneFoodItems = document.getElementById('food-items').cloneNode(true);

        document.getElementById('food-items').remove();
        document.getElementById('menu-header').after(cloneFoodItems);

        var cloneCartPage = document.getElementById('cart-page').cloneNode(true);
        document.getElementById('cart-page').remove();
        document.getElementById('food-items').after(cloneCartPage);
        addEvents();
    }
}

function addEvents(){
    document.querySelectorAll('.add-to-cart').forEach(item => {
        item.addEventListener('click', addToCart);
    })
    document.querySelectorAll('.addOn-item').forEach(item => {
        item.addEventListener('click', addOnItem);
    })
    document.querySelectorAll('.drop-item').forEach(item => {
        item.addEventListener('click', dropItem);
    })
}