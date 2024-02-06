precio = 400000
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

function increase(){
  let quantity = document.querySelector('.cantidad')
  let increase = Number(quantity.innerHTML)
  increase = increase + 1
  quantity.innerHTML = increase

  total = document.querySelector('.valor-total')
  total.innerHTML = increase * precio
}
function decrease(){
  let quantity = document.querySelector('.cantidad')
  let decrease = Number(quantity.innerHTML)
  decrease = decrease - 1
  quantity.innerHTML = decrease

  total.innerHTML = decrease * precio
}