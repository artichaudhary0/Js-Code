let xhr = new XMLHttpRequest();

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

const button = document.getElementById("btn-random-image");
const container = document.getElementById("dog-container");

button.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const img = document.createElement("img");
      img.src = data.message;
      container.innerHTML = "";
      container.appendChild(img);
    })
    .catch((error) => {
      console.log(error);
    });
});
