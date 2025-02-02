let cc = 0; // Persistent score counter
let f = false; // Game running flag

document.addEventListener("keypress", function (event) {
  if ((event.key === "A" || event.key === "a") && !f) {
    cc = 1; // Start from Level 1
    document.querySelector("h1").innerHTML = "Level " + cc;
    f = true; // Set game as running
    let x;let divs
    function nextLevel() {
      if (!f) return; // Stop game if flag is false

      document.querySelector("h1").innerHTML = "Level " + cc;
      cc++;

      divs = document.querySelectorAll("div");
     x = Math.floor(Math.random() * divs.length);

      divs[x].classList.add("animate");

      setTimeout(() => {
        divs[x].classList.remove("animate");
      }, 50); // 1 second delay before removing the class
    }

    nextLevel(); // Start the game

    document.addEventListener("click", function (event) {
      if (!f) return; // Stop processing if game is over

      let clickedInside = divs[x].contains(event.target);
      
      if (clickedInside) {
        nextLevel(); // Continue to next level only if clicked inside
      } else {
        document.querySelector("h1").innerHTML = "GAME OVER";
        f = false; // Stop the game
      }
    }); 
  }
});
