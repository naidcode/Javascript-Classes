const mybutton = document.getElementById("mybutton");

    mybutton.addEventListener("click", () => {
      mybutton.classList.toggle("enabled");
      if (mybutton.classList.contains("enabled")) {
        mybutton.textContent = "Unsubscribe";
      } else {
        mybutton.textContent = "Subscribe";
      }
    });
