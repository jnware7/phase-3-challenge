window.onload = function () {
  var addToCart = document.querySelectorAll('.add')
  var count = document.querySelectorAll('#cart-item-count')
  var elements = document.getElementsByClassName("item flex flex-row-between")
  var x = document.querySelector('#close')
  var cart = document.querySelector('#modCart')
  var countButton = document.querySelector('#cart-button')

  var countNumber = 0
  var clickedName


  function addToCartMod(){
    countNumber += 1
    count[0].textContent = countNumber
  }


  for(var i = 0 ; i < addToCart.length; i++){
    addToCart[i].addEventListener('click', addToCartMod)
  }


  function close() {
    cart.style.display = "none";
  }
  x.addEventListener("click", close);
  function open() {
    cart.style.display = "block";
  }
countButton.addEventListener("click", open)

count.addEventListener("click", addPoductName)
}


 var cart = document.querySelector('#modCart')
 window.addEventListener("load", close);
 function close() {
   cart.style.display = "none";
 }
