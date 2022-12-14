var textWrapper = document.querySelector(".title .titleText");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='titleText'>$&</span>"
);

ScrollOut({
  onShown: (element) => {
    new TypeIt(element.querySelector(".divTitle"), {
      startDelay: 100,
      cursor: false,
    })
      .pause(1000)
      .go();
  },
});

anime
  .timeline({ loop: true })
  .add({
    targets: ".title .titleText",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 1500,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".title",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 10000,
  });

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
