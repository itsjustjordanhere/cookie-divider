// ----------------------------------------------------------------
// ----------------------------------------------------------------
// Coded by: https://github.com/itsjustjordanhere/
//
// Just keeping things simple for now...
// ----------------------------------------------------------------
// ----------------------------------------------------------------

// Total Cookies Variables
const cookieTotalInput = document.getElementById("totalCookies");
const cookiePlusBtn = document.getElementById("totalCookiesPlusBtn");
const cookieMinusBtn = document.getElementById("totalCookiesMinusBtn");

// Total People Variables
const peopleTotalInput = document.getElementById("peopleTotal");
const peoplePlusBtn = document.getElementById("peoplePlusBtn");
const peopleMinusBtn = document.getElementById("peopleMinusBtn");

// other vaiables
const calculateTotal = document.getElementById("calculateCookies");
const cookieToShare = document.getElementById("cookiesToShare");
const cookieError = document.getElementById("negativeCookieMessage");
const peopleError = document.getElementById("negativePeopleMessage");
const clearResults = document.getElementById("clearResults");

// ----------------------------------------------------------------
// ----------------------------------------------------------------

window.onload = () => {
  cookieTotalInput.value = sessionStorage.getItem("totalCookies");
  peopleTotalInput.value = sessionStorage.getItem("totalPeople");
  cookieToShare.innerText = sessionStorage.getItem("cookieToShare");
};

// cookie events start

// cookie input change event start
cookieTotalInput.addEventListener("change", () => {
  let value = parseInt(document.getElementById("totalCookies").value, 10);
  value = isNaN(value) ? 0 : value;
  document.getElementById("totalCookies").value = value;
  window.sessionStorage.setItem("totalCookies", value);
  if (value < 0) {
    cookieError.innerText = "Error negative number detected";
  } else if (value === 0) {
    cookieError.innerText = null;
  }
});
// cookie input change event end

// cookie plus button event start
cookiePlusBtn.addEventListener("click", function () {
  let value = parseInt(document.getElementById("totalCookies").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("totalCookies").value = value;
  window.sessionStorage.setItem("totalCookies", value);
  if (value == 0) {
    cookieError.innerText = null;
  }
});
// cookie plus button change event end

// cookie minus button change event start

cookieMinusBtn.addEventListener("click", function () {
  let value = parseInt(document.getElementById("totalCookies").value, 10);
  value = isNaN(value) ? 0 : value;
  value--;
  document.getElementById("totalCookies").value = value;
  window.sessionStorage.setItem("totalCookies", value);
  if (value < 0) {
    cookieError.innerText = "Error negative number detected";
  } else if (value == 0) {
    cookieError.innerText = null;
  }
});
// cookie minus button change event end
// cookie events end

// people events start
// people change event start
peopleTotalInput.addEventListener("change", () => {
  let value = parseInt(document.getElementById("peopleTotal").value, 10);
  value = isNaN(value) ? 0 : value;
  document.getElementById("peopleTotal").value = value;
  window.sessionStorage.setItem("totalPeople", value);
  if (value < 0) {
    peopleError.innerText = "Error negative number detected";
  } else if (value === 0) {
    peopleError.innerText = null;
  }
});
// people change event end

// people plus button event start
peoplePlusBtn.addEventListener("click", function () {
  let value = parseInt(document.getElementById("peopleTotal").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("peopleTotal").value = value;
  window.sessionStorage.setItem("totalPeople", value);
  if (value == 1) {
    peopleError.innerText =
      "Either you'll devour all the cookies but if not then please add more people.";
  } else if (value === 0) {
    peopleError.innerText = null;
  }
});
// people plus button event end

// people minus button event start
peopleMinusBtn.addEventListener("click", function () {
  let value = parseInt(document.getElementById("peopleTotal").value, 10);
  value = isNaN(value) ? 0 : value;
  value--;
  document.getElementById("peopleTotal").value = value;
  window.sessionStorage.setItem("totalPeople", value);
  if (value < 0) {
    peopleError.innerText = "Error negative number detected";
  } else if (value == 1) {
    peopleError.innerText =
      "Either you'll devour all the cookies but if not then please add more people.";
  } else if (value == 0) {
    peopleError.innerText = null;
  }
});
// people minus button event end

// people events end

// calculate total number start
calculateTotal.addEventListener("click", function () {
  let calc = cookieTotalInput.value / peopleTotalInput.value;
  let calcOutput = (cookieToShare.innerText = Math.round(calc.toString()));
  window.sessionStorage.setItem("cookieToShare", calcOutput);
});
// calculate total number end

// clear results start
clearResults.addEventListener("click", function () {
  window.sessionStorage.removeItem("cookieToShare");
  window.sessionStorage.removeItem("totalPeople");
  window.sessionStorage.removeItem("totalCookies");
  cookieTotalInput.value = null;
  peopleTotalInput.value = null;
  cookieToShare.innerText = null;
  peopleError.innerText = null;
  cookieError.innerText = null;
});
// clear results end

// ----------------------------------------------------------------
// ----------------------------------------------------------------
