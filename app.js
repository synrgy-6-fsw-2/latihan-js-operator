const DISCOUNT = 0.1; // 10%
const SHIPPING_FEE = 100;

const productText = document.getElementById('product-text');
const subTotalText = document.getElementById('subtotal-text');
const discountText = document.getElementById('discount-text');
const shippingFeeText = document.getElementById('shipping-fee-text');
const totalText = document.getElementById('total-text');

discountText.innerHTML = DISCOUNT;
shippingFeeText.innerHTML = SHIPPING_FEE;

const inputItemName = document.getElementById('itemName');
const inputPrice = document.getElementById('price');
const inputQty = document.getElementById('qty');
const formCart = document.getElementById('form-cart');

function onChangeInputName(e) {
    productText.textContent = e.target.value;
}
function onSubmitCart(e) {
    e.preventDefault();
    if ((!inputPrice.value) || (!inputQty.value)) {
        return null;
    }
    price = Number(inputPrice.value);
    qty = Number(inputQty.value);
    subtotal = price * qty;
    disc = subtotal * DISCOUNT;
    total = subtotal - disc + SHIPPING_FEE;

    subTotalText.innerHTML = subtotal;
    discountText.innerHTML = disc;
    totalText.innerHTML = total;
}

inputItemName.addEventListener('keydown', onChangeInputName);
formCart.addEventListener('submit', onSubmitCart);
