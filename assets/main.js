document.addEventListener("click", function (event) {
	let active = document.querySelector(".menu-bar__container--items.active");
	if (active) active.classList.remove("active");
	if (event.target.classList.contains("menu-bar__container--items")) {
		event.target.classList.add("active");
	}
});

const menuItems = document.querySelectorAll(".menu-bar__container--items");
const scrollItems = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
	let scrollY = window.pageYOffset;
	[...scrollItems].map(function (section, index) {
		const sectionHeight = section.offsetHeight;
		const sectionTop = section.offsetTop - 65;
		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			menuItems.forEach(function (elem, index) {
				elem.classList.remove("active");
				const filteredItems = [...menuItems].filter((elem) => {
					return elem.getAttribute("href") === `#${section.getAttribute("id")}`;
				});
				filteredItems[0].classList.add("active");
			});
		}
	});
});
