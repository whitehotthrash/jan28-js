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
  if (eventData.code === "Space") {
    console.log("Space has been pressed!");
    return;
  }
  if (eventData.code === "Meta") {
    console.log("Meta key has been pressed");
    return;
  }
});

const button = document.getElementById("change-color-button");

const elementToChange = document.getElementById("color-changeable-element");

button.addEventListener("click", function () {
  elementToChange.style.backgroundColor = "red";
});

// callback:

// function greet(name, callback) {
//   console.log(`Hello, ${name}`);
//   callback();
// }

// function sayGoodbye() {
//   setTimeout(() => {
//     console.log("Goodbye!");
//   }, 3000);
// }

// greet("sam", sayGoodbye);

// function factory
function greetUser(message) {
  function greet(name) {
    console.log(message + ", " + name);
  }

  return greet;
}

let sayHello = greetUser("Hello");
sayHello("Tom"); // output: Hello, Tom

let sayHi = greetUser("Hi");
sayHi("Alan"); //output: Hi, Alan

// callstacks and callbacks -------

// setTimeout will run synchronously, but the log is a callback, so it's output will be last in the console
console.log("Hi!");

setTimeout(() => {
  console.log("Execute immediately.");
}, 0);

console.log("Bye!");

// Promise or async/ await

// const fetchData = new Promise((resolve, reject) => {
//   const success = true;

//   setTimeout(() => {
//     if (success) {
//       resolve("Data fetched successfully");
//     } else {
//       reject("Error fetching data");
//     }
//   }, 1000);
// });

// fetchData
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

async function fetchData() {
    // simulate fetching data
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, name: "Test" }), 1000);
    });
}

async function processData(data) {
    return { ...data, processed: true };
}

async function saveData(data) {
    console.log("Saving data:", data);
}

async function handleData() {
    try {
        const data = await fetchData();          // ✅ now defined
        const processedData = await processData(data);
        await saveData(processedData);
        console.log("All tasks completed");
    } catch (error) {
        console.error("Error:", error);
    }
}

handleData();

