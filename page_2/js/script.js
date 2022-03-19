const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuList = document.querySelector('.menu__list');

if (iconMenu) {
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		const Lock = document.querySelector('._lock');
		if (Lock) {
			menuList.insertAdjacentHTML('afterbegin', '<li class="_menu__person menu__item"><a href="#" class="menu__link"><img src="img/header/Shape.svg" alt=""><div class="menu__text">My XBOX</div><div class="menu__arrow"></div><ul class="menu__sub-list"><li><a href="#" class="menu__sub-link">chapter №1</a></li><li><a href="#" class="menu__sub-link">chapter №2</a></li><li><a href="#" class="menu__sub-link">chapter №3</a></li></ul></a></li>');
			let menuArrows = document.querySelectorAll('.menu__arrow');
			let menuItems = document.querySelectorAll('.menu__item');
			if (menuArrows.length > 0) {
				for (let index = 0; index < menuArrows.length; index++) {
					let menuArrow = menuArrows[index];
					let menuItem = menuArrow.parentElement;
					menuItem.addEventListener("click", function(e) {
						if (menuItem.parentElement.classList.contains('_act')) {
							menuItem.parentElement.classList.remove('_act');
						} else {
							for (let i = 0; i < menuItems.length; i++) {
								menuItems[i].classList.remove('_act');
								menuItem.parentElement.classList.add('_act');
							}
						}
					});
				}
			}
		} else {
			const menuPerson = document.querySelector('._menu__person');
			if (menuPerson) {
				menuPerson.remove();
			}
		}
	})
}

//выпадающее меню
if (document.documentElement.clientWidth > 744) {
	let menuArrows = document.querySelectorAll('.menu__arrow');
	let menuItems = document.querySelectorAll('.menu__item');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			let menuArrow = menuArrows[index];
			let menuItem = menuArrow.parentElement;
			menuItem.addEventListener("click", function(e) {
				if (menuItem.parentElement.classList.contains('_act')) {
					menuItem.parentElement.classList.remove('_act');
				} else {
					for (let i = 0; i < menuItems.length; i++) {
						menuItems[i].classList.remove('_act');
						menuItem.parentElement.classList.add('_act');
					}
				}
			});
		}
	}
}