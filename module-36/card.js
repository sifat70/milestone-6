const addProduct = () => {
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity')

    const product = productName.value;
    const quantity = productQuantity.value;

    productName.value = '';
    productQuantity.value = '';

    console.log(product, quantity);
    showProduct(product,quantity);
    sveProductToLocalStorage(product, quantity)
}

const showProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerHTML = `
    ${product}: ${quantity}
    `
    ul.appendChild(li)
}

const getStoreShoppingCart = () => {
    const storeCart = localStorage.getItem('cart');
    let cart = {};
    if (storeCart) {
        cart = JSON.parse(storeCart);
    }
    return cart;
}

const sveProductToLocalStorage = (product, quantity) =>{
    const cart = getStoreShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}


const displayProductsFromLocalStorage = () =>{
    const savedCart = getStoreShoppingCart();
    console.log(savedCart);
    for(const product in savedCart){
        const quantity = savedCart[product];
        console.log(product, quantity);
        showProduct(product, quantity)
    }
}

displayProductsFromLocalStorage()