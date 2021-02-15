let span = document.getElementsByClassName("close")[0];
let modalBtn = document.getElementById("modal-btn");
let modalBtnPhone = document.querySelector(".signupPhone");
let modal = document.querySelector(".modal");
let partnerPhone = document.querySelector("#partnerPhone");
let modalPartnerBtn = document.getElementById("partners");
let modalPartner = document.querySelector(".modal-partner");
let closePartner = document.querySelector("#close-btn-part");
let closeForms = document.querySelectorAll(".close-form");
let closeBtnModals = document.querySelectorAll(".close-btn");
let popupModal = document.querySelector('.popup')
let hamburgerContent = $(".hamburger-content");
let hamburgerBtn = $(".hamburger");
let hamburgerShown = false;

for (let x = 0; x < closeBtnModals.length; x++) {
  const element = closeBtnModals[x];
  element.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "none";
    modalPartner.style.display = "none";
    popupModal.style.display = "none";
  });
}
let allInputs = document.querySelectorAll("input");
let allTextareas = document.querySelectorAll("textarea");
let allErrors = document.querySelectorAll(".errorLabel");
let counter = document.querySelectorAll(".counter");

function clearInput() {
  for (let i = 0; i < allInputs.length; i++) {
    const inputs = allInputs[i];
    inputs.value = "";
  }

  for (let j = 0; j < allTextareas.length; j++) {
    const textareas = allTextareas[j];
    textareas.value = "";
  }

  for (let z = 0; z < counter.length; z++) {
    const counters = counter[z];
    counters.innerHTML = 300;
  }

  for (let p = 0; p < allErrors.length; p++) {
    const errors = allErrors[p];
    errors.style.display = "none";
  }

}

function textCounter() {
  for (let i = 0; i < allTextareas.length; i++) {
    const element = allTextareas[i];
    for (let j = 0; j < counter.length; j++) {
      const counters = counter[j];
      element.addEventListener("keyup", function () {
        counters.innerHTML = 300 - element.textLength;
      });
      element.addEventListener("keydown", function () {
        counters.innerHTML = 300 - element.textLength;

      });
    }
  }
}

textCounter();

for (let l = 0; l < closeForms.length; l++) {
  const closeBtn = closeForms[l];
  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "none";
    modalPartner.style.display = "none";
    popupModal.style.display = "none";
  });
  clearInput();
}

modalBtn.addEventListener("click", function () {
  modal.style.display = "block";
  clearInput();
});

modalBtnPhone.addEventListener("click", function () {
  modal.style.display = "block";
  clearInput();
});

window.addEventListener("click", function (e) {
  if (
    e.target == modal ||
    e.target == modalPartner || e.target == popupModal
  ) {
    modal.style.display = "none";
    modalPartner.style.display = "none";
    popupModal.style.display = "none";
  }
});

modalPartnerBtn.addEventListener("click", function () {
  modalPartner.style.display = "block";
  clearInput();
});

partnerPhone.addEventListener("click", function () {
  modalPartner.style.display = "block";
  clearInput();
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    modal.style.display = "none";
    modalPartner.style.display = "none";
    popupModal.style.display = "none";

    clearInput();
  }
});


let submitModalSmall = document.querySelector("#signUp");
let smErrorName = document.querySelector("#sm-error-name");
let smErrorEmail = document.querySelector("#sm-error-email");
let inputSmallName = document.querySelector("#name");
let inputSmallEmail = document.querySelector("#email");

submitModalSmall.addEventListener("click", function () {
  if (inputSmallName.value != "") {
    smErrorName.style.display = "none";
    inputSmallName.blur();
  } else {
    smErrorName.style.display = "block";
  }

  if (inputSmallEmail.value != "") {
    smErrorEmail.style.display = "none";
    inputSmallEmail.blur();
  } else {
    smErrorEmail.style.display = "block";
  }
});

inputSmallName.addEventListener("keyup", function () {
  smErrorName.style.display = "none";
});

inputSmallEmail.addEventListener("keyup", function () {
  smErrorEmail.style.display = "none";
});

let xlSubmitBtn = document.querySelector("#signUp-partner");
let xlErrorName = document.querySelector("#xl-error-name");
let xlErrorPhone = document.querySelector("#xl-error-phone");
let xlNameInput = document.querySelector("#userFullName");
let xlPhoneInput = document.querySelector("#phone");

xlSubmitBtn.addEventListener("click", function () {
  if (xlNameInput.value != "") {
    xlErrorName.style.display = "none";
    xlNameInput.blur();
  } else {
    xlErrorName.style.display = "block";
  }

  if (xlPhoneInput.value != "") {
    xlErrorPhone.style.display = "none";
    xlPhoneInput.blur();
  } else {
    xlErrorPhone.style.display = "block";
  }
});

xlNameInput.addEventListener("keyup", function () {
  xlErrorName.style.display = "none";
});

xlPhoneInput.addEventListener("keyup", function () {
  xlErrorPhone.style.display = "none";
});

$(hamburgerBtn).on("click", function () {
  if (!hamburgerShown) {
    $(hamburgerContent).slideDown();
    $(hamburgerBtn).html('<i class="fas fa-times"></i>');
    hamburgerShown = true;
  } else {
    $(hamburgerContent).slideUp();
    $(hamburgerBtn).html('<i class="fas fa-bars"></i>');
    hamburgerShown = false;
  }
});

let spaceBtn = $("#spaceBlog");
let filter = $(".nav-filter");
let visible = true;

$(spaceBtn).click(function (e) {
  e.preventDefault();
  location.hash = "";
  if (!visible) {
    $(filter).slideUp();
    visible = true;
  } else {
    $(filter).slideDown();
    visible = false;
  }
});


let contactPopup = document.querySelector('#contact-click');

contactPopup.addEventListener('click', function(e) {
  e.preventDefault();
  popupModal.style.display = 'block';
})