console.log("JavaScript has loaded!");

let mainContainer = document.getElementById("mainContainer");
let testimonial = document.createElement("div");

mainContainer.appendChild(testimonial);

// remove content

//let targetToRemove = document.getElementsByClassName("mainContainer")[0];
// targetToRemove.remove();
//mainContainer.removeChild(testimonial);

window.addEventListener("keydown", (eventData) => {
  // when key is pressed, do stuff
  if (eventData.code === "Space"){
    console.log("Space has been pressed!");
    return
  }
  if (eventData.code === "Meta", (eventData) => {
    console.log("Meta key has been pressed");
    return
  })
})

// document.getElementById("mainContainer").addEventListener("keydown", (eventData) => {
//   if (eventData.key === " "){
//     console.log("Space has been pressed");
//     return
//   }
// })