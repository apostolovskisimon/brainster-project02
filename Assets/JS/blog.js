let slideIndex = 1;
let numberText = document.querySelector(".numbertext");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let filterCategory = document.querySelectorAll(".cat");

function clearCategory() {
  for (let z = 0; z < filterCategory.length; z++) {
    const category = filterCategory[z];
    category.classList.remove("active-filter");
  }
}

function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides((slideIndex -= 1));
  } else {
    showSlides((slideIndex += 1));
  }
  if (n === -1) {
    myTimer = setInterval(function () {
      plusSlides(n + 2);
    }, 7000);
  } else {
    myTimer = setInterval(function () {
      plusSlides(n + 1);
    }, 7000);
  }
}

function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(n + 1);
  }, 7000);
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  for (let j = 0; j <= slides.length; j++) {
    numberText.innerHTML = slideIndex + "/" + j;
  }
}

window.addEventListener("load", function () {
  showSlides(slideIndex);
  myTimer = setInterval(function () {
    plusSlides(1);
  }, 7000);
});

let blogCardContainer = document.querySelector("#blogCards");

function createCard(card) {
  let cardsMain = document.createElement("a");
  cardsMain.classList.add("card-div");
  cardsMain.classList.add("card-link");
  cardsMain.href = card.links;
  let cardImg = document.createElement('div');
  cardImg.classList.add('card-img');
  let image = document.createElement("img");
  image.classList.add('pic');
  image.src = `Assets/Images/Space_Blog_Kartici/${card.img}.jpg`;
  cardImg.appendChild(image);
  cardsMain.appendChild(cardImg)
  let title = document.createElement("h3");
  title.classList.add("title-card");
  title.innerText = card.title;
  cardsMain.appendChild(title);
  let desc = document.createElement("p");
  desc.classList.add("desc-card");
  desc.innerText = card.desc;
  cardsMain.appendChild(desc);
  let category = document.createElement("p");
  category.classList.add("category-card");
  category.innerText = card.catTwo;
  cardsMain.appendChild(category);
  let link = document.createElement("button");
  link.classList.add("linked");
  link.innerHTML = `<i class="far fa-arrow-alt-circle-right"></i>`;
  cardsMain.appendChild(link);
  return cardsMain;
}

function handleRoute(e) {
  e.preventDefault();
  let hash = location.hash;

  switch (hash) {
    case "#Career":
      slideIndex = 1;
      showSlides(slideIndex);
      currentSlide(slideIndex);

      blogCardContainer.innerHTML = "";

      let careerCards = blogCards.filter((cards) => "Career" == cards.catTwo);
      careerCards.forEach((card) => {
        let myCard = createCard(card);
        blogCardContainer.appendChild(myCard);
      });

      clearCategory();
      careerFilter.classList.add("active-filter");
      careerFilterHam.classList.add("active-filter");
      break;

    case "#Technology":
      slideIndex = 3;
      showSlides(slideIndex);
      currentSlide(slideIndex);

      blogCardContainer.innerHTML = "";

      let techCards = blogCards.filter((cards) => "Technology" == cards.catTwo);
      techCards.forEach((card) => {
        let myCard = createCard(card);
        blogCardContainer.appendChild(myCard);
      });

      clearCategory();

      techFilter.classList.add("active-filter");
      techFilterHam.classList.add("active-filter");
     
      break;

    case "#DataScience":
      slideIndex = 4;
      showSlides(slideIndex);
      currentSlide(slideIndex);

      blogCardContainer.innerHTML = "";

      let dataCards = blogCards.filter(
        (cards) => "Data Science" == cards.catTwo
      );
      dataCards.forEach((card) => {
        let myCard = createCard(card);
        blogCardContainer.appendChild(myCard);
      });

      clearCategory();
     
      dataFilter.classList.add("active-filter");
      dataFilterHam.classList.add("active-filter");
     
      break;

    case "#Marketing":
      slideIndex = 5;
      showSlides(slideIndex);
      currentSlide(slideIndex);

      blogCardContainer.innerHTML = "";

      let marketingCards = blogCards.filter(
        (cards) => "Marketing" == cards.catTwo
      );
      marketingCards.forEach((card) => {
        let myCard = createCard(card);
        blogCardContainer.appendChild(myCard);
      });

      clearCategory();
     
      marketingFilter.classList.add("active-filter");
      marketingFilterHam.classList.add("active-filter");
     
      break;

    case "#Design":
      slideIndex = 6;
      showSlides(slideIndex);
      currentSlide(slideIndex);

      blogCardContainer.innerHTML = "";

      let designCards = blogCards.filter((cards) => "Design" == cards.catTwo);
      designCards.forEach((card) => {
        let myCard = createCard(card);
        blogCardContainer.appendChild(myCard);
      });

      clearCategory();
     
      designFilter.classList.add("active-filter");
      designFilterHam.classList.add("active-filter");
     
      break;

    case "#Impact":
      slideIndex = 8;
      showSlides(slideIndex);
      currentSlide(slideIndex);

      blogCardContainer.innerHTML = "";

      let impactCards = blogCards.filter((cards) => "Impact" == cards.catTwo);
      impactCards.forEach((card) => {
        let myCard = createCard(card);
        blogCardContainer.appendChild(myCard);
      });

      clearCategory();
    
      impactFilter.classList.add("active-filter");
      impactFilterHam.classList.add("active-filter");
     
      break;

    case "#SpaceFamily":
      function randomInteger() {
        let slideNums = [5, 6, 9];
        let res = slideNums[Math.floor(Math.random() * slideNums.length)];
        return (slideIndex = res);
      }
      randomInteger();
      showSlides(slideIndex);
      currentSlide(slideIndex);

      blogCardContainer.innerHTML = "";

      let spaceFamilyCards = blogCards.filter(
        (cards) => "#SpaceFamily" == cards.family
      );
      spaceFamilyCards.forEach((card) => {
        let myCard = createCard(card);
        blogCardContainer.appendChild(myCard);
      });

      clearCategory();
      spaceFamilyFilter.classList.add("active-filter");
      spaceFamilyFilterHam.classList.add("active-filter");
      break;

    default:
      slideIndex = 1;
      showSlides(slideIndex);
      currentSlide(slideIndex);
      blogCardContainer.innerHTML = "";
      blogCards.forEach((card) => {
        let cards = createCard(card);
        blogCardContainer.appendChild(cards);
      });

      clearCategory();
      allFilter.classList.add("active-filter");
      allFilterHam.classList.add("active-filter");
    
      break;
  }
}

let allFilter = document.getElementById("all");
let allFilterHam = document.getElementById("allHamb");
let careerFilter = document.getElementById("career");
let careerFilterHam = document.getElementById("careerHam");
let techFilter = document.getElementById("tech");
let techFilterHam = document.getElementById("techHam");
let dataFilter = document.getElementById("data");
let dataFilterHam = document.getElementById("dataHam");
let marketingFilter = document.getElementById("marketing");
let marketingFilterHam = document.getElementById("marketingHam");
let designFilter = document.getElementById("design");
let designFilterHam = document.getElementById("designHam");
let impactFilter = document.getElementById("impact");
let impactFilterHam = document.getElementById("impactHam");
let spaceFamilyFilter = document.getElementById("spaceFamily");
let spaceFamilyFilterHam = document.getElementById("spaceFamilyHam");

allFilter.addEventListener("click", function (e) {
  e.preventDefault();
  location.hash = "";
  showSlides(slideIndex);
  currentSlide(slideIndex);
});

allFilterHam.addEventListener("click", function (e) {
  e.preventDefault();
  location.hash = "";
  showSlides(slideIndex);
  currentSlide(slideIndex);
});

careerFilter.addEventListener("click", function (e) {
  e.preventDefault();
  location.hash = "Career";
  slideIndex = 1;
  showSlides(slideIndex);
  currentSlide(slideIndex);
});

careerFilterHam.addEventListener("click", function (e) {
  e.preventDefault();
  location.hash = "Career";
  slideIndex = 1;
  showSlides(slideIndex);
  currentSlide(slideIndex);
});

techFilter.addEventListener("click", function (e) {
  e.preventDefault();
  location.hash = "Technology";
  slideIndex = 3;
  showSlides(slideIndex);
  currentSlide(slideIndex);
});

techFilterHam.addEventListener("click", function (e) {
  e.preventDefault();
  location.hash = "Technology";
  slideIndex = 3;
  showSlides(slideIndex);
  currentSlide(slideIndex);
});

dataFilter.addEventListener("click", function (e) {
  e.preventDefault();
  location.hash = "DataScience";
  slideIndex = 4;
  showSlides(slideIndex);
  currentSlide(slideIndex);
});

dataFilterHam.addEventListener("click", function (e) {
  e.preventDefault();
  location.hash = "DataScience";
  slideIndex = 4;
  showSlides(slideIndex);
  currentSlide(slideIndex);
});

marketingFilter.addEventListener("click", function (e) {
  e.preventDefault();
  location.hash = "Marketing";
  slideIndex = 5;
  showSlides(slideIndex);
  currentSlide(slideIndex);
});

marketingFilterHam.addEventListener("click", function (e) {
  e.preventDefault();
  location.hash = "Marketing";
  slideIndex = 5;
  showSlides(slideIndex);
  currentSlide(slideIndex);
});

designFilter.addEventListener("click", function (e) {
  e.preventDefault();
  location.hash = "Design";
  function randomInteger(min, max) {
    let res = Math.floor(Math.random() * (max - min + 1)) + min;
    return (slideIndex = res);
  }
  randomInteger(6, 7);
  showSlides(slideIndex);
  currentSlide(slideIndex);
});

designFilterHam.addEventListener("click", function (e) {
  e.preventDefault();
  location.hash = "Design";
  function randomInteger(min, max) {
    let res = Math.floor(Math.random() * (max - min + 1)) + min;
    return (slideIndex = res);
  }
  randomInteger(6, 7);
  showSlides(slideIndex);
  currentSlide(slideIndex);
});

impactFilter.addEventListener("click", function (e) {
  e.preventDefault();
  location.hash = "Impact";
  function randomInteger(min, max) {
    let res = Math.floor(Math.random() * (max - min + 1)) + min;
    return (slideIndex = res);
  }
  randomInteger(8, 9);
  showSlides(slideIndex);
  currentSlide(slideIndex);
});

impactFilterHam.addEventListener("click", function (e) {
  e.preventDefault();
  location.hash = "Impact";
  function randomInteger(min, max) {
    let res = Math.floor(Math.random() * (max - min + 1)) + min;
    return (slideIndex = res);
  }
  randomInteger(8, 9);
  showSlides(slideIndex);
  currentSlide(slideIndex);
});

spaceFamilyFilter.addEventListener("click", function (e) {
  e.preventDefault();
  location.hash = "SpaceFamily";
  function randomSlide() {
    function randomInteger() {
      let slideNums = [5, 6, 9];
      let res = slideNums[Math.floor(Math.random() * slideNums.length)];
      return (slideIndex = res);
    }
    randomInteger();
    showSlides(slideIndex);
    currentSlide(slideIndex);
  }
  randomSlide();
});

spaceFamilyFilterHam.addEventListener("click", function (e) {
  e.preventDefault();
  location.hash = "SpaceFamily";
  function randomSlide() {
    function randomInteger() {
      let slideNums = [5, 6, 9];
      let res = slideNums[Math.floor(Math.random() * slideNums.length)];
      return (slideIndex = res);
    }
    randomInteger();
    showSlides(slideIndex);
    currentSlide(slideIndex);
  }
  randomSlide();
});

window.addEventListener("hashchange", handleRoute);
window.addEventListener("load", handleRoute);

let filterContent = $(".filter-content");
let filterHamburgerBtn = $(".ham-filter");
let hamContent = $(".hamburger-content");
let hamBtn = $(".hamburger");
let hamShown = true;
let filterOpen = true;

$(filterHamburgerBtn).on("click", function () {
  if (!filterOpen) {
    $(filterContent).slideUp();
    $(filterHamburgerBtn).html('<i class="fas fa-angle-double-down"></i>');
    filterOpen = true;
    hamShown = true;
  } else {
    $(filterContent).slideDown();
    $(filterHamburgerBtn).html('<i class="fas fa-angle-double-up"></i>');
    $(hamBtn).html('<i class="fas fa-bars"></i>');
    $(hamContent).slideUp();
    filterOpen = false;
    hamShown = true;
  }
});

$(hamBtn).on("click", function () {
  if (!hamShown) {
    $(hamContent).slideUp();
    $(hamBtn).html('<i class="fas fa-bars"></i>');
    hamShown = true;
    filterOpen = true;
  } else {
    $(filterContent).slideUp();
    $(filterHamburgerBtn).html('<i class="fas fa-angle-double-down"></i>');
    $(hamBtn).html('<i class="fas fa-times"></i>');
    $(hamContent).slideDown();
    hamShown = false;
    filterOpen = true;
  }
});
