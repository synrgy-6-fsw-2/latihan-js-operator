const DISCOUNT = 0.1; // Discount 10%
const SHIPPING_FEE = 1000;

const productText = document.getElementById('product-text');
const subTotalText = document.getElementById('subtotal-text');
const discountText = document.getElementById('discount-text');
const shippingFeeText = document.getElementById('shipping-fee-text');
const totalText = document.getElementById('total-text');

discountText.innerText = DISCOUNT * 100 + '%';
shippingFeeText.innerText = SHIPPING_FEE;

const inputItemName = document.getElementById('itemName');
const inputPrice = document.getElementById('price');
const inputQty = document.getElementById('qty');
const formCart = document.getElementById('form-cart');

function onChangeInputName() {
  productText.innerText = inputItemName.value;
}

function onSubmitCart(e) {
  e.preventDefault();

  if (inputPrice.value < 0 || inputPrice.value === '' || inputQty.value < 0 || inputQty.value === '') {
    totalText.innerText = 'Nilai tidak boleh negatif atau kosong';
  } else {
    const subTotal = inputPrice.value * inputQty.value;
    const Total = (subTotal * (1 - DISCOUNT) + SHIPPING_FEE).toLocaleString('id-ID');
    const discountNominal = (subTotal * DISCOUNT).toLocaleString('id-ID');

    subTotalText.innerText = `Rp. ${subTotal.toLocaleString('id-ID')}`;
    discountText.innerText = `Rp. ${discountNominal}`;
    totalText.innerText = `Rp. ${Total}`;
  }
}

inputItemName.addEventListener('change', onChangeInputName);
formCart.addEventListener('submit', onSubmitCart);
