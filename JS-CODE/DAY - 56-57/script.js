// let xhr = new XMLHttpRequest();

// xhr.open("GET", "https://dog.ceo/api/breeds/image/random", true);
// xhr.onprogress = function () {
//   console.log("on progress");
// };

// xhr.onload = function () {
//   console.log(this.status);
//   if (this.status == 200 || this.status == 201) {
//     let dog = JSON.parse(this.responseText);
//     console.log(dog);
//   } else {
//     console.log("Error");
//   }
// };

// xhr.send();

// let promise = fetch("https://dog.ceo/api/breeds/image/random");

// promise
//   .then((response) => {
//     console.log(response.status);

//     return response.json(); // object
//   })
//   .then((value) => {
//     console.log(value);
//   });

// console.log(fetch("https://dog.ceo/api/breeds/image/random"));

// const button = document.getElementById("btn-random-image");
// const container = document.getElementById("dog-container");

// button.addEventListener("click", () => {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       const img = document.createElement("img");
//       img.src = data.message;
//       container.innerHTML = "";
//       container.appendChild(img);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// const breedDropdown = document.getElementById("breed-dropdown");
// const dogImage = document.getElementById("dog-image");

// fetch("https://dog.ceo/api/breeds/list/all")
//   .then((response) => response.json())
//   .then((data) => {
//     const breeds = Object.keys(data.message);
//     breeds.forEach((breed) => {
//       const options = document.createElement("option");
//       options.value = breed;
//       options.textContent = breed;
//       breedDropdown.appendChild(options);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching the breed : " + error);
//   });

// breedDropdown.addEventListener("change", (event) => {
//   const selectBreed = event.target.value;

//   if (selectBreed !== "Select a breed") {
//     // query parameter
//     fetch(`https://dog.ceo/api/breed/${selectBreed}/images/random`)
//       .then((response) => response.json())
//       .then((data) => {
//         const image = document.createElement("img");
//         image.src = data.message;
//         image.style.maxWidth = "300px";
//         image.style.maxHeight = "300px";

//         dogImage.innerHTML = "";
//         dogImage.appendChild(image);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// });

// const button = document.getElementById("btn-get-sub-breed");
// const list = document.getElementById("sub-breed-list");

// button.addEventListener("click", () => {
//   fetch("https://dog.ceo/api/breed/hound/list")
//     .then((response) => response.json())
//     .then((data) => {
//       list.innerHTML = "";
//       if (data.message.length === 0) {
//         list.innerHTML = "<li>No sub breed available</li>";
//       } else {
//         data.message.forEach((subBreed) => {
//           const li = document.createElement("li");
//           li.textContent = subBreed;
//           list.appendChild(li);
//         });
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// callback function
function fun(name, callback) {
  // parameter
  console.log("outter fun " + name);
  callback();
}

function fun1() {
  console.log("Hello");
}

fun("Arti", fun1); // argument
