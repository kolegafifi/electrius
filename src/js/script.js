window.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.nav__burger')
	const dropoutNavClose = document.querySelector('.dropout-nav__close')
	const dropoutNav = document.querySelector('.dropout-nav')
	const dropoutNavItems = document.querySelectorAll('.dropout-nav__items__item')
	const goUpBtn = document.querySelector('.go-up')
	const handleDropoutNav = () => {
		if (!dropoutNav.classList.contains('show-dropout-nav')) {
			dropoutNav.classList.add('show-dropout-nav')
		} else {
			dropoutNav.classList.remove('show-dropout-nav')
		}
	}
	dropoutNavItems.forEach(item => {
		item.addEventListener('click', handleDropoutNav)
	})
	window.addEventListener('scroll', () => {
		if (window.scrollY > 600) {
			goUpBtn.classList.add('show-go-up')
		} else {
			goUpBtn.classList.remove('show-go-up')
		}
	})

	goUpBtn.addEventListener('click', () => {
		window.scrollTo({ top: 0 })
	})
	burger.addEventListener('click', handleDropoutNav)
	dropoutNavClose.addEventListener('click', handleDropoutNav)
})
