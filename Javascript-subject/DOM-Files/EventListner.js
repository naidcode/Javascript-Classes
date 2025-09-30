let button = document.querySelector(".btn-chg");
let box1 = document.querySelector(".box1");
button.addEventListener("click" , event => {
  box1.style.backgroundColor = "red"
  box1.style.color = "white"
  box1.style.borderRadius = "18px"
  box1.textContent = "Submit 👌"
})

button.addEventListener("mouseover" , event => {
  box1.style.color = "red"
  box1.style.backgroundColor = "lightgreen"
  box1.textContent = "don't do that 😑"

})

button.addEventListener("mouseout" , event => {
  box1.style.backgroundColor = "tomato"
  box1.style.color = "green"
})