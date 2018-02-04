var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var leftArrow = document.querySelector('.reviews__btn--left');
var rightArrow = document.querySelector('.reviews__btn--right');
var lastInput = document.querySelector('.review__slider input:nth-last-of-type(1)');
var firstInput = document.querySelector('.review__slider input:nth-of-type(1)');

navToggle.addEventListener("click", function() {
	if (navMain.classList.contains("main-nav--closed")) {
		navMain.classList.remove("main-nav--closed");
		navMain.classList.add("main-nav--opened");
	} else {
		navMain.classList.add("main-nav--closed");
		navMain.classList.remove("main-nav--opened");
	}
});

leftArrow.addEventListener('click', function() {
  var checkedInput = document.querySelector('.review__slider input:checked');
  if (checkedInput !== firstInput) {
    checkedInput.previousElementSibling.checked = true;
  }
  else if (checkedInput === firstInput) {
    lastInput.checked = true;
  }
});

rightArrow.addEventListener('click', function() {
  var checkedInput = document.querySelector('.review__slider input:checked');
  if (checkedInput !== lastInput) {
    checkedInput.nextElementSibling.checked = true;
  }
  else if (checkedInput === lastInput) {
    firstInput.checked = true;
  }
});
