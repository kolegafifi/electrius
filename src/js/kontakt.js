const formName = document.querySelector('#name')
const formEmail = document.querySelector('#email')
const formTel = document.querySelector('#tel')
const formMessage = document.querySelector('#message')
const formSubmit = document.querySelector('#formsend')
const formFeedback = document.querySelector('.contact-form__feedback')
let errors
const validateForm = () => {
	errors = 0
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	if (!re.test(formEmail.value)) {
		formEmail.classList.add('error')
		errors += 1
	} else {
		formEmail.classList.remove('error')
	}

	const re2 = /^(\+?\d{2}\s?)?\d{9}$/

	if (!re2.test(formTel.value)) {
		formTel.classList.add('error')
		errors += 1
	} else {
		formTel.classList.remove('error')
	}

	if (formMessage.value == '') {
		formMessage.classList.add('error')
		errors += 1
	} else if (formMessage.value != '') {
		formMessage.classList.remove('error')
	}

	if (formName.value == '') {
		formName.classList.add('error')
		errors += 1
	} else if (formName.value != '') {
		formName.classList.remove('error')
	}
}
formSubmit.addEventListener('click', a => {
	a.preventDefault()
	validateForm()
	if (errors == 0) {
		formFeedback.classList.add('show-feedback')
	} else {
		formFeedback.classList.remove('show-feedback')
		return
	}
})
