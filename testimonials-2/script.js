const testimonials = document.querySelector(".testimonials");
const testimonial = document.querySelectorAll(".testimonial");
const btnPrev = document.querySelector(".btn-left");
const btnNext = document.querySelector(".btn-right");
const testimonialArray = Array.from(testimonial);

let currentPerson = 0;

const go = () => {
  for (let i = 0; i < testimonialArray.length; i++) {
    testimonialArray[i].style.transform = `translateX(${
      (i - currentPerson) * 100
    }%)`;
  }
};

go();

btnNext.addEventListener("click", () => {
  currentPerson = (currentPerson + 1) % testimonialArray.length;
  go();
});

btnPrev.addEventListener("click", () => {
  currentPerson =
    (currentPerson - 1 + testimonialArray.length) % testimonialArray.length;
  go();
});
