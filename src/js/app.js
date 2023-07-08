const headerBtn = document.querySelector(".header-burger");

headerBtn.addEventListener("click", () => {
  document.querySelector(".header-nav").classList.toggle("active");
  document.querySelector(".header-burger__wrapper").classList.toggle("active");
});

document.querySelectorAll(".header-menu__link").forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(".header-nav").classList.remove("active");
    document
      .querySelector(".header-burger__wrapper")
      .classList.remove("active");
  });
});
// Contact
const contactBtn = document.querySelector(".header-nav__btn");
const shadow = document.querySelector(".shadow");

contactBtn.addEventListener("click", () => {
  showContact();
});

shadow.addEventListener("click", () => {
  hideContact();
});

function showContact() {
  document.querySelector("body").classList.add("lock");
  document.querySelector(".contact").classList.add("active");
  shadow.classList.add("active");
}

function hideContact() {
  document.querySelector("body").classList.remove("lock");
  document.querySelector(".contact").classList.remove("active");
  shadow.classList.remove("active");
}

// Аккордеон
const acoordeonBtn = document.querySelectorAll(".accordeon-quest");

acoordeonBtn.forEach((el) => {
  el.addEventListener("click", () => {
    const accordeonAnswer = el.nextElementSibling;
    el.classList.toggle("active");
    if (accordeonAnswer.style.maxHeight) {
      document.querySelectorAll(".accordeon-answer").forEach((el) => {
        el.style.maxHeight = null;
      });
    } else {
      document.querySelectorAll(".accordeon-answer").forEach((el) => {
        el.style.maxHeight = null;
      });
      accordeonAnswer.style.maxHeight = accordeonAnswer.scrollHeight + "px";
    }
  });
});

// Btn

window.onscroll = function showBtn() {
  if (window.pageYOffset > 400) {
    document.querySelector(".top-btn").classList.add("active");
  } else {
    document.querySelector(".top-btn").classList.remove("active");
  }
};
