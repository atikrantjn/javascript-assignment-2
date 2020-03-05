// main function checks value on click of a button.

function validate() {
  var residence1 = document.getElementById("residence1");
  var residence2 = document.getElementById("residence2");

  var check_box1 = document.getElementById("checkbox_sample18");
  var check_box2 = document.getElementById("checkbox_sample19");
  var check_box3 = document.getElementById("checkbox_sample20");
  var check, radio;

  //condition for gender field

  if (!(residence1.checked || residence2.checked)) {
    document.getElementById("alert_gender").innerHTML =
      "Please select your gender";

    radio = false;
  } else {
    document.getElementById("alert_gender").innerHTML = "";
    radio = true;
  }

  if (!(check_box1.checked || check_box2.checked || check_box3.checked)) {
    document.getElementById("alert_check").innerHTML =
      "Please select atleast one interest ";

    check = false;
  } else {
    document.getElementById("alert_check").innerHTML = "";
    check = true;
  }

  var first = validateFirst();
  var last = validateLast();
  var phone_value = validPhone();
  var phone_office = valid_officePhone();
  var u_email = validateEmail();
  var u_password = validatePassword();
  var u_confPassword = validateConfPass();
  var u_about = validateAbout();

  if (
    first == true &&
    last == true &&
    phone_value == true &&
    phone_office == true &&
    u_email == true &&
    u_password == true &&
    u_confPassword == true &&
    u_about == true &&
    radio == true &&
    check == true
  ) {
    alert("form submitted successfully");

    window.location.reload();
  } else {
    alert("please fill all the details before submitting form");
  }
}

// check for numbers input only in phone no. field

function numbersOnly(input) {
  var regex = /[^0-9]/;

  input.value = input.value.replace(regex, "");
}

// check for characters only input in first name and last name field

function onlyCharacters(input) {
  var regex = /[^a-zA-z\s]/;

  input.value = input.value.replace(regex, "");
}

// checking first name input field

function validateFirst() {
  if (first_name.value === "") {
    //
    document.getElementById("alertFirst").innerHTML =
      "This field cannot be empty";

    return false;
  }
  document.getElementById("alertFirst").innerHTML = "";
  return true;
}

// checking last name input field

function validateLast() {
  if (last_name.value === "") {
    document.getElementById("alertLast").innerHTML =
      "This field cannot be empty";

    return false;
  }
  document.getElementById("alertLast").innerHTML = "";
  return true;
}

// checking input value of phone field;

function validPhone() {
  if (phone_no.value === "") {
    document.getElementById("alertPhone").innerHTML =
      "this field cannot be empty";

    return false;
  } else if (!/^[0-9]{10}$/.test(phone_no.value)) {
    document.getElementById("alertPhone").innerHTML =
      "please enter 10 digit phone number";
    return false;
  }
  document.getElementById("alertPhone").innerHTML = "";
  return true;
}

//checking input value for office field

function valid_officePhone() {
  if (office_no.value === "") {
    document.getElementById("alert_officePhone").innerHTML =
      "This field cannot be empty";

    return false;
  } else if (!/^[0-9]{10}$/.test(office_no.value)) {
    document.getElementById("alert_officePhone").innerHTML =
      "please enter 10 digit phone number";
    return false;
  } else {
    document.getElementById("alert_officePhone").innerHTML = "";
    return true;
  }
}

// validate email entered by user

function validateEmail() {
  var pattern = /^([a-zA-Z])+([0-9a-zA-Z_\.\-])+\@+(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,5}$)$/;
  var user_email = document.getElementById("user_email");

  if (user_email.value === "") {
    document.getElementById("alert_email").innerHTML =
      "this field cannot be empty";

    return false;
  } else if (!user_email.value.match(pattern)) {
    document.getElementById("alert_email").innerHTML =
      "please enter valid email address";

    return false;
  }
  document.getElementById("alert_email").innerHTML = "";
  return true;
}

//validate password function

function validatePassword(min, max) {
  var alert_pass = document.getElementById("alert_pass");
  var user_pass = document.getElementById("user_pass");
  var pass_pattern = /^[a-zA-Z0-9]+$/;
  var pass_len = user_pass.value.length;

  if (
    pass_len < min ||
    pass_len > max ||
    !user_pass.value.match(pass_pattern)
  ) {
    document.getElementById("alert_pass").innerHTML =
      "please enter password between 8-15 alphanumeric characters";

    return false;
  }
  document.getElementById("alert_pass").innerHTML = "";
  return true;
}

//confirm password validation function.

function validateConfPass() {
  if (user_conf.value === user_pass.value) {
    document.getElementById("alert_conf_pass").innerHTML = "";
    return true;
  }
  document.getElementById("alert_conf_pass").innerHTML =
    "Password did'nt matched ";
  return false;
}

//age validation function

function getAge() {
  var inputMonth = document.getElementById("month");
  var inputYear = document.getElementById("year");
  var inputDay = document.getElementById("day");

  var today = new Date();

  var newdate = new Date(inputYear.value, inputMonth.value, inputDay.value);

  var diff = Math.abs(today.getTime() - newdate.getTime());
  console.log(diff);

  var age = diff / (1000 * 60 * 60 * 24 * 365.25);
  console.log(age);

  var fixed_age = age.toFixed(1);

  if (
    inputMonth.value === "month" ||
    inputYear.value === "year" ||
    inputDay.value === "day"
  ) {
    document.getElementById("alert_birth").innerHTML =
      "please enter valid date,year,month";
    document.getElementById("age").value = "";
    return false;
  } else {
    document.getElementById("age").value = fixed_age + " years";
    document.getElementById("alert_birth").innerHTML = "";
    return true;
  }
}

//validate about us
function validateAbout() {
  if (about_us.value === "") {
    document.getElementById("alert_about").innerHTML =
      "This field is mandatory ";

    return false;
  }
  document.getElementById("alert_about").innerHTML = "";
  return true;
}
//getting month from this function

function months() {
  let monthArray = [
    "month",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  document.getElementById("month").innerHTML = "";

  // month options dynamically

  if (document.getElementById("year").value == new Date().getFullYear()) {
    max_month = new Date().getMonth() + 1;

    document.getElementById("month").innerHTML = "";

    for (m = 0; m <= max_month; m++) {
      let month_option = document.createElement("option");
      month_option.value = m;
      month_option.innerHTML = monthArray[m];
      document.getElementById("month").appendChild(month_option);
    }
  } else {
    for (m = 0; m < monthArray.length; m++) {
      let month_option = document.createElement("option");
      month_option.value = m;
      month_option.innerHTML = monthArray[m];
      document.getElementById("month").appendChild(month_option);
    }
  }
}

//getting days value from this function

function days() {
  let max_day = 0;

  document.getElementById("day").innerHTML = "";
  if (
    document.getElementById("year").value == new Date().getFullYear() &&
    document.getElementById("month").value == new Date().getMonth() + 1
  ) {
    max_day = new Date().getDate();

    // document.getElementById("day").innerHTML = "";
    for (let j = 1; j <= max_day; j++) {
      let day_option = document.createElement("option");
      day_option.value = j;
      day_option.innerHTML = j;
      document.getElementById("day").appendChild(day_option);
    }
  } else {
    // document.getElementById("day").innerHTML = "";
    max_day = 31;
    for (let j = 1; j <= max_day; j++) {
      let day_option = document.createElement("option");
      day_option.value = j;
      day_option.innerHTML = j;
      document.getElementById("day").appendChild(day_option);
    }
  }
}

let year = 1980;
let day = 1;

let currentyear = new Date().getFullYear();

var select_year = document.getElementById("year");

//rendering year dynamically

for (var i = year; i <= currentyear; i++) {
  var optn = document.createElement("option");
  optn.value = i;
  optn.innerHTML = i;
  select_year.appendChild(optn);
}
