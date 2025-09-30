// //-----------------EXAMPLE 1 <h1> --------------------
// // STEP 1 CREATE THE ELEMENT
// const newH1 = document.createElement("h1");


// // STEP 2 ADD ATTRIBUTES/PROPERTIES
// newH1.textContent = "I Like Swarma"
// newH1.style.color = "maroon"
// newH1.style.textAlign = "center"
// newH1.style.backgroundColor = "black"


// // STEP 3 APPEND ELEMENT TO DOM

// // document.body.append(newH1)
// // document.body.prepend(newH1)
// document.getElementById("box1").append(newH1)

// // const box1 = document.getElementById("box1");
// // document.body.insertBefore(box2 , box1) //* here i can that put box 2 before box1 now you can understand.

// // const boxes = document.querySelectorAll(".box");
// // document.body.insertBefore(newH1 , boxes[0])

// // REMOVE HTML ELEMENT

// document.getElementById("box1").removeChild(newH1) // use can remove elements like this 



const listItem = document.createElement("li");
listItem.textContent = "coconut";
document.querySelector(".fruits").append(listItem)
// const orange = document.getElementById("banana");
// document.querySelector(".fruits").insertBefore(listItem , orange)

const boxes = document.querySelectorAll("li");
document.querySelector(".fruits").insertBefore(listItem , boxes[2])




let hello = document.createElement("button")
hello.textContent = "Submit"
document.body.append(hello)

 document.getElementById("para").innerHTML = "<button>hello nahid</button>"  //! different between innerHTML and textcontent
  document.getElementById("para2").textContent = "<button>hello nahid</button>"


