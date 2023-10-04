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

function onChangeInputName(e) {}
function onSubmitCart(e) {}

inputItemName.addEventListener('change', onChangeInputName);
formCart.addEventListener('submit', onSubmitCart);
