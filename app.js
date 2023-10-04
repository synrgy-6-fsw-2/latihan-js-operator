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

inputItemName.addEventListener('input', onChangeInputName);
inputPrice.addEventListener('submit', onSubmitCart);
inputQty.addEventListener('submit', onSubmitCart);

function onChangeInputName(e) {
    const inputValue = inputItemName.value;
    productText.textContent = `${inputValue}`;
}

function onSubmitCart(e) {
    e.preventDefault();

    const priceInputValue = inputPrice.value;
    const qtyInputValue = inputQty.value;

    const DISKON = DISCOUNT;
    
    const FEE = SHIPPING_FEE;

    // console.log(DISKON)
    // console.log(SHIPPING_FEE)

    const subTotalProcessedValue =  priceInputValue * qtyInputValue;
    const totalProcessedValue = subTotalProcessedValue - (subTotalProcessedValue * DISKON) + FEE;

    // console.log(totalProcessedValue)

    subTotalText.textContent = `${subTotalProcessedValue}`;

    totalText.textContent = `${totalProcessedValue}`;
    
}

inputItemName.addEventListener('change', onChangeInputName);
formCart.addEventListener('submit', onSubmitCart);
