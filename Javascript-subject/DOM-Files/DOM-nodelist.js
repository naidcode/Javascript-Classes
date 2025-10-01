let buttons = document.querySelectorAll("button");

// buttons.forEach(button => {
  //   button.style.backgroundColor = "lightgreen"
  //   button.textContent += "😑"
  // })
  
  // buttons.forEach(button => {
    //   button.addEventListener("click" , event => {
      //     event.target.style.backgroundColor = "lightgreen"
      //   })
      // })
      
      
      buttons.forEach(button => {
          button.addEventListener("mouseover" , event => {
              event.target.style.backgroundColor = "lightgreen"
            })
          })
          
          buttons.forEach(button => {
              button.addEventListener("mouseout" , event => {
                  event.target.style.backgroundColor = "lightblue"
                })
              })
let newButton = document.createElement("button");
newButton.textContent = "button 5";
newButton.id ="mybutton";
document.body.appendChild(newButton);

buttons = document.querySelectorAll("button")

buttons.forEach(button => {
  button.addEventListener("click" , event => {
    event.target.remove()
  })
})

