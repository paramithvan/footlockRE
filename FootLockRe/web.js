let form = document.getElementById("form");
function validateName(name) {
  return name.length >= 4 && name.length <= 16;
}

let emailErrorMessage = [
  "Please enter a valid email address with format that contain @",
  "Please enter a valid email address with format that contain . (gmail.com, yahoo.co.id)",
];

function validateEmail(email) {
  let split = email.split("@");
  if (split.length == 1) {
    return 0;
  }

  let getDot = split[split.length - 1];
  let getDotSplit = checkbox.split(".");
  if (getDotSplit.length == 1) {
    return 1;
  }
  return -1;
}

function checkPhoneNum(phoneNum) {
  if (
    phoneNum.startsWith("08") == false ||
    phoneNum.startsWith("+62") == false
  ) {
    alert("Phone Number must be start with 08 / +62");
  }
  e.preventDefault();
  return;
}

function checkCountry(country) {
  if (country.selectedIndex == 0) {
    return false;
  }
  return true;
}

let error = document.getElementById("error");
function showError(message) {
  error.style.display = "block";
  error.innerHTML = message;
}

function clear() {
  error.style.display = "none";
}

function submit() {
  let name = document.getElementById("name");
  if (!validateName(name.value)) {
    alert("Name length must be in range 4 to 16 characters");
    return;
  }
  let email = document.getElementById("email");
  let checkEmail = validateEmail(email.value);
  if (checkEmail != -1) {
    alert(emailErrorMessage[checkEmail]);
    return;
  }
  let phoneNum = document.getElementById("phoneNum");
  if (phoneNum.isEmpty) {
    alert("Please enter your email");
    return;
  } else if (
    phoneNum.startsWith("08") == false ||
    phoneNum.startsWith("+62") == false
  ) {
    alert("Phone Number must be start with 08 / +62");
    return;
  }
  let country = document.getElementById("country");
  if (!checkCountry(country)) {
    alert("Please select a country");
    return;
  }

  let checkbox = document.getElementById("checkbox-subs");
  if (!checkbox.checked) {
    alert("Please check the checkbox to continue subscribe");
  }

  clear();
  alert("You Have Been Sucessfully Subscribe Our Website.");
  console.log(name.value);
  console.log(email.value);
  console.log(phoneNum.value);
  console.log(country);
  console.log(checkbox.value);
}
