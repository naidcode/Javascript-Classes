let box = document.querySelector(".box");

let movement = 10;
let a = 0;
let b = 0;

document.addEventListener("keydown", (event) => {
  box.textContent = "😂";
  box.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", (event) => {
  box.textContent = "😊";
  box.style.backgroundColor = "lightblue";
});

document.addEventListener("keydown", event => {
  if (event.key.startsWith("Arrow")) {
    event.preventDefault();
    switch (event.key) {
      case "ArrowUp":
        b -= movement;
        break;
      case "ArrowLeft":
        b += movement;
        break;
      case "ArrowDown":
        a -= movement;
        break;
      case "ArrowRight":
        a += movement;
        break;
    }

    box.style.top = `${b}px`;
    box.style.left = `${a}px`;
  }
});
