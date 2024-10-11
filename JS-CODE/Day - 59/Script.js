const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// CRUD => CREATE

function createPost() {
  let newPost = {
    title: "New Post generated",
    body: "ksugviydbvyrdb",
    userId: 1,
  };

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset = UTF-8",
    },
    body: JSON.stringify(newPost),
  })
    .then((response) => {
      console.log(response);

      return response.json();
    })
    .then((data) => {
      console.log("New post created" + data);
    })
    .catch((error) => {
      console.log("Error " + error);
    });
}
createPost();

// read Data

function getPost() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
getPost();

// Update (PUT)

function updatePost() {
  const updateData = {
    title: "updated title",
    body: "updated body",
    userId: 1,
  };

  fetch(`${apiUrl}/${1}`, {
    method: "PUT",
    // headers: {
    //   "Content-Type": "application/json; charset = UTF-8",
    // },
    body: JSON.stringify(updateData),
  })
    .then((response) => {
      response.json();
    })
    .then((data) => console.log("updated successfully")); // id = 1
}
updatePost();

// delete

function deletePost() {
  fetch(`${apiUrl}/1`, { method: "DELETE" })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("Deleted post successfully" + data);
    })
    .catch((error) => {
      console.log("Error " + error);
    });
}

deletePost();
