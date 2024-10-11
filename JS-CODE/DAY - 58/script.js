// fetch("https://jsonplaceholder.typicode.com/users/1/posts", {
//   method: "POST", // POST => Create
//   body: JSON.stringify({
//     // data send
//     title: "Arti",
//     body: "Chaudhary",
//     userId: 1,
//   }),
//   headers: {
//     // data sent to server must contain header
//     "Content-Type": "application/json; charset = UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// https://omdbapi.com/
// d717459f
// tt3896198
// https://omdbapi.com/?i=tt3896198&apikey=d717459f

// const apiUrl = "https://www.omdbapi.com/"; // base url
// const apiKey = "d717459f"; // authentication

// async function fetcMovie(imdbId) {
//   try {
//     const response = await fetch(`${apiUrl}?i=${imdbId}&apikey=${apiKey}`);

//     if (!response.ok) {
//       throw new Error("Something went wrong : " + response.status);
//     }

//     const data = await response.json();

//     if (data.Response === "True") {
//       displayMovie(data);
//     } else {
//       document.getElementById(
//         "movie-container"
//       ).innerHTML = `<p>Error while fetching movie ${data.Error}</p>`;
//     }
//   } catch (error) {
//     document.getElementById(
//       "movie-container"
//     ).innerHTML = `<p>Error while fetching movie ${error.message}</p>`;
//   }
// }

// function displayMovie(movie) {
//   const movieContainer = document.getElementById("movie-container");

//   movieContainer.innerHTML = `
//   <h2>${movie.Title}</h2>
//   <img src = "${movie.Poster} alt =  "${movie.Title}"/>"
//   `;
// }
// fetcMovie("tt3896198");