window.addEventListener("DOMContentLoaded", function () {
  ("use strict");
  const $sliders = document.querySelectorAll('[data-slider="chiefslider"]');
  $sliders.forEach(function ($item) {
    if (
      $item.querySelector(".slider__item").getBoundingClientRect().width *
        $item.querySelectorAll(".slider__item").length >
      $item.querySelector(".slider__wrapper").getBoundingClientRect().width
    ) {
      // добавим индикаторы
      const $indicators = document.createElement("ol");
      $indicators.className = "slider__indicators";
      let inner = "";
      $item
        .querySelectorAll(".slider__item")
        .forEach(function ($sliderItem, index) {
          inner += `<li data-slide-to="${index}"></li>`;
        });
      $indicators.innerHTML = inner;
      $item.appendChild($indicators);
      // инициализируем слайдер
      new ChiefSlider(".slider");
    } else {
      $item.querySelectorAll(".slider__control").forEach(function ($control) {
        $control.style.display = "none";
      });
    }
  });

  // new ChiefSlider(".slider");

  let burgerMenuBtn = document.querySelector(".burger");
  let burgerMenuList = document.querySelector(".hide-menu");
  burgerMenuBtn.addEventListener("click", function () {
    burgerMenuBtn.classList.toggle("open-menu");
    if (burgerMenuBtn.classList.contains("open-menu")) {
      burgerMenuList.classList.remove("show-menu");
    }
    if (burgerMenuBtn.classList.contains("open-menu")) {
      burgerMenuList.classList.add("show-menu");
    } else {
      burgerMenuList.classList.remove("show-menu");
    }
  });
});
