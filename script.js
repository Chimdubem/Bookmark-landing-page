"use strict";

////////////////////////////////////////////////////////////////////////
//ADDING TABBED FEATURE FOR SECTION-FEATURE

const ft1 = document.querySelector(".features-tabs-1");
const ft2 = document.querySelector(".features-tabs-2");
const ft3 = document.querySelector(".features-tabs-3");

const fts1 = document.querySelector(".features-tabbed-section-1");
const fts2 = document.querySelector(".features-tabbed-section-2");
const fts3 = document.querySelector(".features-tabbed-section-3");

ft1.addEventListener("click", function () {
  ft1.classList.add("features-bd");
  ft2.classList.remove("features-bd");
  ft3.classList.remove("features-bd");

  fts1.classList.remove("hidden");
  fts2.classList.add("hidden");
  fts3.classList.add("hidden");
});

ft2.addEventListener("click", function () {
  ft1.classList.remove("features-bd");
  ft2.classList.add("features-bd");
  ft3.classList.remove("features-bd");

  fts1.classList.add("hidden");
  fts2.classList.remove("hidden");
  fts3.classList.add("hidden");
});

ft3.addEventListener("click", function () {
  ft1.classList.remove("features-bd");
  ft2.classList.remove("features-bd");
  ft3.classList.add("features-bd");

  fts1.classList.add("hidden");
  fts2.classList.add("hidden");
  fts3.classList.remove("hidden");
});

////////////////////////////////////////////////////////////////////////
//ADDING ACCORDION FEATURE FOR SECTION-FAQ

const accordion1question = document.querySelector(".accordion-1-question");
const accordion2question = document.querySelector(".accordion-2-question");
const accordion3question = document.querySelector(".accordion-3-question");
const accordion4question = document.querySelector(".accordion-4-question");

const accordion1ans = document.querySelector(".accordion-1-ans");
const accordion2ans = document.querySelector(".accordion-2-ans");
const accordion3ans = document.querySelector(".accordion-3-ans");
const accordion4ans = document.querySelector(".accordion-4-ans");
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const arrow3 = document.querySelector(".arrow3");
const arrow4 = document.querySelector(".arrow4");

accordion1question.addEventListener("click", function () {
  accordion1ans.classList.toggle("hidden");
  arrow1.classList.toggle("arrow-new");
});
accordion2question.addEventListener("click", function () {
  accordion2ans.classList.toggle("hidden");
  arrow2.classList.toggle("arrow-new");
});
accordion3question.addEventListener("click", function () {
  accordion3ans.classList.toggle("hidden");
  arrow3.classList.toggle("arrow-new");
});
accordion4question.addEventListener("click", function () {
  accordion4ans.classList.toggle("hidden");
  arrow4.classList.toggle("arrow-new");
});

/////////////////////////////////////////////////////////////////////////////////////

// MOBILE NAVIGATION

const btnNavEl = document.querySelector(".btn-mobile-nav");
const navEl = document.querySelector(".nav");

btnNavEl.addEventListener("click", function () {
  navEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////////////////////////////////
//Email Validation
const form = document.getElementById("form");
const email = document.getElementById("email");
const small = document.querySelector(".small");
const exc = document.querySelector(".exc-img");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  function checkInputs() {
    const emailValue = email.value.trim();

    if (emailValue === "") {
      small.style.visibility = "visible";
      exc.style.visibility = "visible";
    } else form.submit();
  }

  checkInputs();
});

/////////////////////////////////////////////////////
// Smooth scrolling animation

document.querySelector(".nav__links").addEventListener("click", function (e) {
  console.log(e.target);
  e.preventDefault();
  //Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    const scrollto = document.querySelector(id).getBoundingClientRect();

    window.scrollTo({
      left: scrollto.left + window.pageXOffset,
      top: scrollto.top + window.pageYOffset,
      behavior: "smooth",
    });
  }
});

const fl = document.querySelectorAll(".footer__links");
const footer_links = [...fl];
console.log(footer_links);

footer_links.forEach((link) => {
  link.addEventListener("click", function (e) {
    console.log(e.target);
    e.preventDefault();
    //Matching strategy
    if (e.target.classList.contains("nav__link")) {
      const id = e.target.getAttribute("href");
      console.log(id);
      const scrollto = document.querySelector(id).getBoundingClientRect();

      window.scrollTo({
        left: scrollto.left + window.pageXOffset,
        top: scrollto.top + window.pageYOffset,
        behavior: "smooth",
      });
    }
  });
});
