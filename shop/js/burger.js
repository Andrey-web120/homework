let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');

burger.addEventListener('click', function (e) {
	e.stopPropagation();
	nav.classList.toggle('active');
});

document.addEventListener('click', function (e) {
	if (!nav.contains(e.target)) {
		nav.classList.remove('active');
	}
});