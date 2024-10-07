
var button = document.getElementById("fetch");

button.addEventListener("click", buttonClickHandler);

/*
  Restfull API : CRUD : CREATE , READ , UPDATE , DELETE
      1 : GET : READ
      2 : POST : CREATE
      3 : PATCH / PUT : UPADTE
      4 : DELETE : DELETE
*/

function buttonClickHandler() {
  const xhr = new XMLHttpRequest(); // instance
  /*
      xmlHttpRequest
      fetch
  */
  // open or initilize the XMLHTTPREQUEST object
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  console.log("button clicked");

  // waiting state
  xhr.onprogress = function () {
    console.log("On progress");
  };

  // onload when data is fetched
  xhr.onload = function () {
    console.log(this.status);
    if (this.status == 200 || this.status == 201) {
      const users = JSON.parse(this.responseText); // JSON to Object
      console.log(users);
      displayUser(users);
    } else {
      console.log("Not found");
    }
  };
  console.log(this.status);
  xhr.send();
  console.log("END of req");
  console.log("END");
}

function displayUser(users) {
  // users = object (List Array)
  const userList = document.getElementById("user-list");
  userList.innerHTML = ""; // clear the existing data

  users.forEach((user) => {
    let userDiv = document.createElement("div");
    userDiv.classList.add("user-card");

    userDiv.innerHTML = `

      <h3>${user.name}</h3>
      <p>${user.username}</p>
      `;
    userList.appendChild(userDiv);
  });
}
