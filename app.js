const DISCOUNT = 0.1; // 10%
const SHIPPING_FEE = 100;

const productText = document.getElementById("product-text");
const subTotalText = document.getElementById("subtotal-text");
const discountText = document.getElementById("discount-text");
const shippingFeeText = document.getElementById("shipping-fee-text");
const totalText = document.getElementById("total-text");

discountText.innerText = DISCOUNT;
shippingFeeText.innerText = SHIPPING_FEE;

const inputItemName = document.getElementById("itemName");
const inputPrice = document.getElementById("price");
const inputQty = document.getElementById("qty");
const formCart = document.getElementById("form-cart");

function onChangeInputName() {
    productText.innerText = inputItemName.value;
}

function onSubmitCart(e) {
  e.preventDefault();

  if (
    inputPrice.value < 0 ||
    inputQty.value < 0 
  ) {
    totalText.innerText = "Nilai tidak boleh negatif atau tidak angka";
  } else {
    const subTotal = inputPrice.value * inputQty.value;
    subTotalText.innerText = subTotal;

    const Total = subTotal * (1 - DISCOUNT) + SHIPPING_FEE;
    totalText.innerText = Total;
  }
}

inputItemName.addEventListener("change", onChangeInputName);
formCart.addEventListener("submit", onSubmitCart);
