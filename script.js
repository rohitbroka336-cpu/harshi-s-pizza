


function hideAll(){

  document.getElementById("pizzaItems").style.display="none"
  document.getElementById("burgerItems").style.display="none"
  document.getElementById("momosItems").style.display="none"
  document.getElementById("friesItems").style.display="none"
  document.getElementById("drinkItems").style.display="none"

}

function showPizza(){

  hideAll()
  document.getElementById("pizzaItems").style.display="flex"

}

function showBurger(){

  hideAll()
  document.getElementById("burgerItems").style.display="flex"

}

function showMomos(){

  hideAll()
  document.getElementById("momosItems").style.display="flex"

}

function showFries(){

  hideAll()
  document.getElementById("friesItems").style.display="flex"

}

function showDrinks(){

  hideAll()
  document.getElementById("drinkItems").style.display="flex"

}
