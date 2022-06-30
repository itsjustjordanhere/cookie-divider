// ----------------------------------------------------------------
// maintained by: https://github.com/itsjustjordanhere
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
  cookieTotalInput.value = localStorage.getItem("totalCookies");
  peopleTotalInput.value = localStorage.getItem("totalPeople");
  cookieToShare.textContent = localStorage.getItem("cookieToShare");

  validationAfterRefresh();
  function validationAfterRefresh() {
    if (cookieTotalInput.value < 0) {
      cookieError.textContent = "Error negative number detected";
    }
    if (peopleTotalInput.value < 0) {
      peopleError.textContent = "Error negative number detected";
    }
    if (peopleTotalInput.value == 1) {
      peopleError.textContent =
        "Either you'll devour all the cookies but if not then please add more people.";
    }
  }
};

// cookie events start

// cookie input change event start
cookieTotalInput.addEventListener("change", () => {
  let value = parseInt(document.getElementById("totalCookies").value, 10);
  value = isNaN(value) ? 0 : value;
  document.getElementById("totalCookies").value = value;
  window.localStorage.setItem("totalCookies", value);
  if (value < 0) {
    let errorSound = new Audio("/assets/js/sounds/error.mp3");
    errorSound.play();
    cookieError.textContent = "Error negative number detected";
  } else if (value === 0) {
    cookieError.textContent = null;
  } else if (value > 0) {
    cookieError.textContent = null;
  }
});
// cookie input change event end

// cookie keypress event start
cookieTotalInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    calculateTotal.click();
  }
});
// cookie keypress event end

// cookie plus button event start
cookiePlusBtn.addEventListener("click", function () {
  let plusBtnSound = new Audio("/assets/js/sounds/cookie_plus_btn_sound.mp3");
  plusBtnSound.play();
  let value = parseInt(document.getElementById("totalCookies").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("totalCookies").value = value;
  window.localStorage.setItem("totalCookies", value);
  if (value == 0) {
    cookieError.textContent = null;
  }
});
// cookie plus button change event end

// cookie minus button change event start

cookieMinusBtn.addEventListener("click", function () {
  let minusBtnSound = new Audio("/assets/js/sounds/cookieMinusBtnSound.mp3");
  minusBtnSound.play();
  let value = parseInt(document.getElementById("totalCookies").value, 10);
  value = isNaN(value) ? 0 : value;
  value--;
  document.getElementById("totalCookies").value = value;
  window.localStorage.setItem("totalCookies", value);
  if (value < 0) {
    let errorSound = new Audio("/assets/js/sounds/error.mp3");
    errorSound.play();
    cookieError.textContent = "Error negative number detected";
  } else if (value == 0) {
    cookieError.textContent = null;
  }
});
// cookie minus button change event end

// cookie events end

// ----------------------------------------------------------------
// ----------------------------------------------------------------

// people events start

// people change event start
peopleTotalInput.addEventListener("change", () => {
  let value = parseInt(document.getElementById("peopleTotal").value, 10);
  value = isNaN(value) ? 0 : value;
  document.getElementById("peopleTotal").value = value;
  window.localStorage.setItem("totalPeople", value);
  if (value < 0) {
    let errorSound = new Audio("/assets/js/sounds/error.mp3");
    errorSound.play();
    peopleError.textContent = "Error negative number detected";
  } else if (value === 1) {
    peopleError.textContent =
      "Either you'll devour all the cookies but if not then please add more people.";
  } else if (value > 1) {
    peopleError.textContent = null;
  } else if (value === 0) {
    peopleError.textContent = null;
  }
});

// people keypress event start
peopleTotalInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    calculateTotal.click();
  }
});
// people keypress event end

// people change event end

// people plus button event start
peoplePlusBtn.addEventListener("click", function () {
  let plusBtnSound = new Audio("/assets/js/sounds/cookie_plus_btn_sound.mp3");
  plusBtnSound.play();
  let value = parseInt(document.getElementById("peopleTotal").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("peopleTotal").value = value;
  window.localStorage.setItem("totalPeople", value);
  if (value == 1) {
    peopleError.textContent =
      "Either you'll devour all the cookies but if not then please add more people.";
  } else if (value === 0) {
    peopleError.textContent = null;
  } else if (value > 1) {
    peopleError.textContent = null;
  }
});
// people plus button event end

// people minus button event start
peopleMinusBtn.addEventListener("click", function () {
  let minusBtnSound = new Audio("/assets/js/sounds/cookieMinusBtnSound.mp3");
  minusBtnSound.play();
  let value = parseInt(document.getElementById("peopleTotal").value, 10);
  value = isNaN(value) ? 0 : value;
  value--;
  document.getElementById("peopleTotal").value = value;
  window.localStorage.setItem("totalPeople", value);
  if (value < 0) {
    let errorSound = new Audio("/assets/js/sounds/error.mp3");
    errorSound.play();
    peopleError.textContent = "Error negative number detected";
  } else if (value == 1) {
    peopleError.textContent =
      "Either you'll devour all the cookies but if not then please add more people.";
  } else if (value == 0) {
    peopleError.textContent = null;
  }
});
// people minus button event end

// people events end

// calculate total number start
calculateTotal.addEventListener("click", function () {
  let clearSoundEffect = new Audio("/assets/js/sounds/bading.wav");
  clearSoundEffect.play();
  let calc = cookieTotalInput.value / peopleTotalInput.value;
  let calcOutput = (cookieToShare.textContent = Math.round(calc.toString()));
  window.localStorage.setItem("cookieToShare", calcOutput);
});

// calculate total number end

// clear results start

clearResults.addEventListener("click", function () {
  console.log("clicked clear results");
  window.localStorage.removeItem("cookieToShare");
  window.localStorage.removeItem("totalPeople");
  window.localStorage.removeItem("totalCookies");
  cookieTotalInput.value = null;
  peopleTotalInput.value = null;
  cookieToShare.textContent = null;
  peopleError.textContent = null;
  cookieError.textContent = null;
});
// clear results end

// ----------------------------------------------------------------
// ----------------------------------------------------------------
