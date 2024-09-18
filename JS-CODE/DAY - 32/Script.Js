document.getElementById("jsForm").addEventListener("submit", function (event) {
  event.preventDefault();

  document
    .querySelectorAll(`span[id$='Error']`)
    .forEach((span) => span.textContent);

  try {
    const username = document.getElementById("username").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (username.length < 3) {
      throw new Error("user name must contain atleast 3 character");
    }

    if (!email.includes("@")) {
      throw new Error("email must contain @");
    }

    if (age <= 0) {
      throw new Error("Age must be greater then 0");
    }

    if (password.length < 8) {
      throw new Error("password must be 8 character long");
    }

    if (password !== confirmPassword) {
      throw new Error("Confirm password must be equal to Password");
    }

    alert("Form is valid");
  } catch (error) {
    switch (error.message) {
      case "user name must contain atleast 3 character":
        document.getElementById("usernameError").textContent = error.message;
        break;
      case "Age must be greater then 0":
        document.getElementById("ageError").textContent = error.message;
        break;
      case "email must contain @":
        document.getElementById("emailError").textContent = error.message;
        break;
      case "password must be 8 character long":
        document.getElementById("passwordError").textContent = error.message;
        break;
      case "Confirm password must be equal to Password":
        document.getElementById("confirmPassword").textContent = error.message;
        break;
    }
  }
});
