var textWrapper = document.querySelector(".title .titleText");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='titleText'>$&</span>"
);

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
