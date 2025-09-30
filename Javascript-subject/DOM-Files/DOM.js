/**
 * * this all are DOM's selectors...
 * * getElementById()
 * * getElementByClassName()
 * *getElementByTagName()
 * * querySelector()
 * * querySelectorAll() 
 */
const username = " Nahid pasha ";

const welcome = document.getElementById("welcome-msg");
welcome.textContent += username === "" ? " guest " : username;

welcome.style.color = "red";
welcome.style.backgroundColor = "yellow";
welcome.style.textAlign = "center";
welcome.style.border = "2px solid green";
welcome.style.borderRadius = "10px";
welcome.style.textDecoration = "underline";

//* getElementByClassName()
const fruits = document.getElementsByClassName("fruits");

// * fruits[0].style.backgroundColor = "yellow"  // if i want to color 1 element then we can use index to color
//  ! fruits.style.backgroundColor = "yellow" // we can not use directly like this instead

//  *  for(const fruit of fruits ) {
//* fruit.style.backgroundColor = "yellow"  // we can use in for  }

Array.from(fruits).forEach((fruit) => {
  //*and for foreach first we need to make our class to an array after we can use foreach also
  fruit.style.backgroundColor = "red";
});

//* getElementByTagName()

const h4Element = document.getElementsByTagName("h4");
const ulelement = document.getElementsByTagName("ul");
const lielement = document.getElementsByTagName("li");

h4Element[0].style.backgroundColor = "green"; //* if i want to color one element we can use index
for (let head of h4Element) {
  head.style.backgroundColor = "green"; //* if i want to color every h4 element we can for...of loop and also
}
for (let ul of ulelement) {
  ul.style.backgroundColor = "green";
}
for (let li of lielement) {
  li.style.backgroundColor = "lightgreen";
  li.style.fontSize = "20px";
}

Array.from(h4Element).forEach((head) => {
  head.style.backgroundColor = "purple"; //* we can use like this also better is to do in for..of loop its to easy to understand and save the time.
});

//* querySelector() only choose first element example

const element = document.querySelector(".fruits");
const element2 = document.querySelector("h4");
const element3 = document.querySelector("li");

element.style.color = "white";
element2.style.color = "white";
element3.style.color = "white";

//* querySelectorAll()  nodelist

const h4element = document.querySelectorAll("h4");

h4element[0].style.backgroundColor = "brown";

h4element.forEach((h4) => {
  h4.style.backgroundColor = "lightpink";
});
