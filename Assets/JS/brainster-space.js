let span = document.getElementsByClassName("close")[0];
let modalBtn = document.getElementById("modal-btn");
let modalBtnPhone = document.querySelector(".signupPhone");
let modal = document.querySelector(".modal");
let partnerPhone = document.querySelector("#partnerPhone");
let modalPartnerBtn = document.getElementById("partners");
let modalPartner = document.querySelector(".modal-partner");
let closePartner = document.querySelector("#close-btn-part");
let closeForms = document.querySelectorAll(".close-form");
let innovationForm = document.querySelector(".modalInnovation");
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
    modalCollab.style.display = "none";
    innovationForm.style.display = "none";
    popupModal.style.display = "none";
  });
}
let allInputs = document.querySelectorAll("input");
let allTextareas = document.querySelectorAll("textarea");
let counter = document.querySelectorAll(".counter");
let allErrors = document.querySelectorAll(".errorLabel");

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

  document.querySelector('#count').style.color = 'black';
}

function textCounter() {
  for (let i = 0; i < allTextareas.length; i++) {
    const element = allTextareas[i];
    for (let j = 0; j < counter.length; j++) {
      const counters = counter[j];
      element.addEventListener("keyup", function () {
        counters.innerHTML = 300 - element.textLength;
        document.querySelector('#count').style.color = 'black';
      });
      element.addEventListener("keydown", function () {
        counters.innerHTML = 300 - element.textLength;
        document.querySelector('#count').style.color = 'black';

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
    modalCollab.style.display = "none";
    innovationForm.style.display = "none";
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
    e.target == modalCollab ||
    e.target == modalPartner ||
    e.target == innovationForm || e.target == popupModal
  ) {
    modal.style.display = "none";
    modalPartner.style.display = "none";
    modalCollab.style.display = "none";
    innovationForm.style.display = "none";
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
    modalCollab.style.display = "none";
    innovationForm.style.display = 'none'
    popupModal.style.display = "none";;
    clearInput();
  }
});

let cardModalOne = document.querySelector("#cardModal-1");
let modalCollab = document.querySelector(".modalCollab");

cardModalOne.addEventListener("click", function (e) {
  e.preventDefault();
  modalCollab.style.display = "block";
  clearInput();
});

let cardModalTwo = document.querySelector("#cardModal-2");

cardModalTwo.addEventListener("click", function (e) {
  e.preventDefault();
  innovationForm.style.display = "block";
  clearInput();
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

let submitCollab = document.querySelector("#signUp-collab");
let collabNameError = document.querySelector("#collabNameError");
let collabPhoneError = document.querySelector("#collabPhoneError");
let collabInputName = document.querySelector("#collabName");
let collabInputPhone = document.querySelector("#collabPhone");

submitCollab.addEventListener("click", function () {
  if (collabInputName.value != "") {
    collabNameError.style.display = "none";
    collabInputName.blur();
  } else {
    collabNameError.style.display = "block";
  }

  if (collabInputPhone.value != "") {
    collabPhoneError.style.display = "none";
    collabInputPhone.blur();
  } else {
    collabPhoneError.style.display = "block";
  }
});

collabInputName.addEventListener("keyup", function () {
  collabNameError.style.display = "none";
});

collabInputPhone.addEventListener("keyup", function () {
  collabPhoneError.style.display = "none";
});

let submitInnov = document.querySelector("#signUp-innov");
let innovNameError = document.querySelector("#innovNameError");
let innovEmailError = document.querySelector("#innovEmailError");
let innovPhoneError = document.querySelector("#innovPhoneError");
let innovInputName = document.querySelector("#innovName");
let innovInputEmail = document.querySelector("#innovEmail");
let innovInputPhone = document.querySelector("#innovPhone");
let innovTextarea = document.querySelector('#innovText')

submitInnov.addEventListener("click", function () {
  if (innovInputName.value != "") {
    innovNameError.style.display = "none";
    innovInputName.blur();
  } else {
    innovNameError.style.display = "block";
  }

  if (innovInputEmail.value != "") {
    innovEmailError.style.display = "none";
    innovInputEmail.blur();
  } else {
    innovEmailError.style.display = "block";
  }

  if (innovInputPhone.value != "") {
    innovPhoneError.style.display = "none";
    innovInputPhone.blur();
  } else {
    innovPhoneError.style.display = "block";
  }

  if(innovTextarea.value != '') {
    document.querySelector('#count').classList.remove('errorLabel');
    document.querySelector('#count').style.color = 'black';
    document.querySelector('#count').innerHTML = 300 - innovTextarea.textLength;
   
  } else {
    document.querySelector('#count').style.display = 'block';
    document.querySelector('#count').style.color = 'red';
    document.querySelector('#count').classList.add('errorLabel')
    document.querySelector('#count').innerHTML = 'Внесете Потреба';
  }
});

innovInputName.addEventListener("keyup", function () {
  innovNameError.style.display = "none";
});

innovInputEmail.addEventListener("keyup", function () {
  innovEmailError.style.display = "none";
});

innovInputPhone.addEventListener("keyup", function () {
  innovPhoneError.style.display = "none";
});

let eCards = document.getElementById("eCards");

eventCards.forEach((card) => {
  let image = card.img;
  let title = card.title;
  let desc = card.desc;
  let link = card.link;
  eCards.innerHTML += `
    <a href='${link}' target='_blank' class = "card-div card-link">
    <div class="card-img">
      <img src="Assets/Images/Nastani/${image}.jpg" class="img-responsive pic" alt="Event Image" />
    </div>
    <h3 class="title">${title}</h3>
    <p class="desc">
     ${desc}
    </p>
    <button class="linked"
      ><i class="far fa-arrow-alt-circle-right"></i
    ></button>
    </a>`;
});

let edCompContainer = $("#ed-comp");
let academyBtn = $("#academy-btn");
let companyBtn = $("#company-btn");
let header = $("#header3");
let text = $(".text");
let imgRight = $(".ed-img");

function companySwitch() {
  $("#ed-comp")
    .slideUp()
    .promise()
    .then(function () {
      $(header).text("Компании");
      $(
        text
      ).html(`Компаниите имат можност да се надоградат, да ги подобрат и перформансите на својата компанија. <br><br>
      Дигиталната трансформација се случува, а вашите компании треба да бидат подготвени да се адаптираат соодветно. Обуки, семинари, курсеви или team building.<br><br>
      Во Brainster Space имаме специјално обучен тим кој е подготвен да ја насочи и адаптира својата експертиза со денешните потреби на компаниите.`);
      $(imgRight).html(
        `<img src="Assets/Images/Za_Nas/IMG_7707.jpg" alt="AbousUs Pic 1" />`
      );
      $("#ed-comp").slideDown();
    });
}

$(companyBtn).on("click", companySwitch);

function academySwitch() {
  $("#ed-comp")
    .slideUp()
    .promise()
    .then(function () {
      $(header).text("Едукација");
      $(
        text
      ).html(`Дали си подготвтен да одговориш на потребите на иднината. Вистинските курсеви,
    академии и семинари кои ќе ти овозможат кариерна трансформација во областа на
    дигитален маркетинг, дизајн, програмирање и Data Science.`);
      $(imgRight).html(
        `<img src="Assets/Images/Za_Nas/1.jpg" alt="AbousUs Pic 1" />`
      );
      $("#ed-comp").slideDown();
    });
}

$(academyBtn).on("click", academySwitch);

let soldOutBtn = document.querySelector(".sellout");
let soldOutSpace = document.getElementById("soldOutSpace");

let shown = false;
function soldOut() {
  soldOutBtn.setAttribute("disabled", true);
  soldOutBtn.style.cursor = "pointer";
  soldOutSpace.style.display = "block";
  shown = true;
  setTimeout(() => {
    let int = setInterval(() => {
      if (!shown) {
        soldOutSpace.style.display = "block";
        shown = true;
      } else {
        soldOutSpace.style.display = "none";
        shown = false;
      }
    }, 1000);
  }, 200);
}

soldOutBtn.addEventListener("click", soldOut);

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