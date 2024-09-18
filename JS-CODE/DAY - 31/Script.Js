/*
try
{
  block of code
}catch(error)
{
  block of code to handle errors
}finally{
  BLOCK OF CODE TO BE EXECUTED REGARDLESS OF THE TRY
}


*/

function check() {
  const message = document.getElementById("result"); // result
  message.innerHTML = "";

  let value = document.getElementById("demo").value;

  try {
    if (value.trim() == "") throw "Empty";
    if (isNaN(value)) throw "Not A Number";

    value = Number(value);

    if (value < 5) throw "less then 5";
    if (value > 10) throw " greater then  10";

    if (value > 5 && value < 10) throw value;
  } catch (error) {
    message.innerHTML = `Input value is ` + error;
  }
}

// NESTED ERROR HANDLING

function validUser(user) {
  try {
    if (!user.name) {
      throw "name field is required ";
    }
    if (!user.email.includes("@")) {
      throw " Invalid email format";
    }

    validPassword(user.password);

    return "Valid user success";
  } catch (error) {
    return "User validation error " + error;
  }
}

function validPassword(password) {
  try {
    if (password.length < 8) throw "Password must be at least 8 char long";
    if (!/[A-Z]/.test(password))
      throw "Password must contain at leaset one Upper case";
    if (!/\d/.test(password))
      throw " Password must contain at least one number";
  } catch (error) {
    throw "Password validation error : " + error;
  }
}

const user = {
  name: "Yash",
  email: "yash@gmail.com",
  password: "pass1234567",
};

let result = validUser(user);

console.log(result);
