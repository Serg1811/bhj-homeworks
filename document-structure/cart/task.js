const arrProductQuantityControlDec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const arrProductQuantityControlInc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const productAdd = Array.from(document.querySelectorAll('.product__add'));
const cartProducts = document.querySelector('.cart__products');
let allCartProducts = document.getElementsByClassName('cart__product');

arrProductQuantityControlDec.forEach((el) => {
    el.addEventListener('click', () => {
        let quantity = Number(el.nextElementSibling.textContent);
        if (quantity >= 2) {
            el.nextElementSibling.textContent -= 1;
        }
    });
});

arrProductQuantityControlInc.forEach((el) => {
    el.addEventListener('click', () => {
        let quantity = Number(el.previousElementSibling.textContent);
        quantity += 1;
        el.previousElementSibling.textContent = quantity;
    });
});

productAdd.forEach((el) => {
    el.addEventListener('click', (ev) => {
        ev.preventDefault();
        let id = el.closest('.product').dataset.id;
        let arrAllCartProducts = Array.from(allCartProducts);
        let quantity = el.previousElementSibling.querySelector('.product__quantity-value').textContent;
        let elementCart = arrAllCartProducts.find((elem) => elem.dataset.id == id);

        if (elementCart) {
            elementCart.querySelector('.cart__product-count').textContent = quantity;
        } else {
            let cartProduct = document.createElement('div');
            cartProducts.appendChild(cartProduct);
            cartProduct.outerHTML = `<div class="cart__product" data-id="${id}">
                                       <img class="cart__product-image" src="${el.closest('.product__controls').previousElementSibling.src}">
                                       <div class="cart__product-count">${quantity}</div>
                                     </div>`;
        }
    });
});