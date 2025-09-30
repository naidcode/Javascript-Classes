//* DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript.

//*.firstElementChild
//*.lastElementChild
//* .nextElementSibling
//*.previous ElementSibling
//*.parentElement
//*.children

//* .firstElementChild
const element = document.querySelector(".fruits");
const first = element.firstElementChild;
first.style.backgroundColor = "red";

const ulelement = document.querySelectorAll("ul");
ulelement.forEach((ul) => {
  let ulel = ul.firstElementChild;
  ulel.style.backgroundColor = "orange";
});

// *const ulelement2 = document.querySelectorAll("ul")  if we do like this this will change every ul color
//* ulelement2.forEach(ul => {
//*   ul.style.backgroundColor = "green"
// *});

//* .lastElementChild
const elements2 = document.querySelector(".veg");
const last = elements2.lastElementChild;
last.style.backgroundColor = "red";

const element2 = document.querySelectorAll("ul");
element2.forEach((ul) => {
  let ul2 = ul.lastElementChild;
  ul2.style.backgroundColor = "blue";
});

//* .nextElementSibling

// const element3 = document.querySelector(".");
// const siblings = element3.nextElementSibling;
// siblings.style.color = "blue"
// siblings.style.listStyle = "none"

//* .previousElementSibling
const element4 = document.querySelector(".veg");
const previous = element4.previousElementSibling;
previous.style.backgroundColor = "brown";

//* .parentElement

const element5 = document.getElementById("rasins");
const parent = element5.parentElement;
parent.style.backgroundColor = "gold";

//* .children

const element6 = document.querySelector(".fruits");
const child = element6.children;
Array.from(child).forEach((child) => {
  child.style.backgroundColor = "silver";
});
