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
	const faqItems = document.querySelectorAll('.faq-item')

	faqItems.forEach(item => {
		const button = item.querySelector('.faq-question')
		const answer = item.querySelector('.faq-answer')
		const content = item.querySelector('.faq-answer-content')

		button.addEventListener('click', () => {
			const isOpen = item.classList.contains('active')

			faqItems.forEach(otherItem => {
				const otherAnswer = otherItem.querySelector('.faq-answer')
				otherItem.classList.remove('active')
				otherAnswer.style.height = '0px'
			})

			if (!isOpen) {
				item.classList.add('active')
				answer.style.height = content.offsetHeight + 'px'
			}
		})
	})

	window.addEventListener('resize', () => {
		const activeItem = document.querySelector('.faq-item.active')
		if (activeItem) {
			const answer = activeItem.querySelector('.faq-answer')
			const content = activeItem.querySelector('.faq-answer-content')
			answer.style.height = content.offsetHeight + 'px'
		}
	})
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
	burger.addEventListener('click', handleDropoutNav)
	dropoutNavClose.addEventListener('click', handleDropoutNav)
})
