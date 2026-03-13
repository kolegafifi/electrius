const pradZl = document.querySelector('#zaprad')
const wycen = document.querySelector('.calc-form__actual-calc__send')
// !!!!!
const zapotrzebowanie = document.querySelector('.zapotrzebowanie')
const magazynCena = document.querySelector('.magazyn-cena')
const wynikInstalacji = document.querySelector('.wynik-instalacji')
let kwh
let kosztInstalacji

const handleWycena = () => {
	const magazyn = document.querySelector('input[name="magazyn"]:checked')
	kwh = 0
	kosztInstalacji = 0
	kwh = pradZl.value / 1.12
	kwh *= 12
	if (!magazyn) {
		magazynCena.textContent = 'Niepełne dane'
	} else if (magazyn.value === 'tak') {
		if (kwh <= 2000) {
			magazynCena.textContent = '18999zł'
			kosztInstalacji += 18999
		} else if (kwh >= 2000 && kwh <= 7000) {
			magazynCena.textContent = '24999zł'
			kosztInstalacji += 24999
		} else if (kwh > 7000 && kwh <= 12000) {
			magazynCena.textContent = '27999zł'
			kosztInstalacji += 27999
		} else {
			magazynCena.textContent = 'Zamówienie Niestandardowe, Skontaktuj się z nami'
			kosztInstalacji += 0
		}
	} else {
		magazynCena.textContent = 'Nie chcesz magazynu'
		kosztInstalacji += 0
	}
	if (pradZl.value == 0 || pradZl.value == '') {
		wynikInstalacji.textContent = 'Niepełne dane'
	} else if (pradZl.value != 0) {
		if (kwh <= 2000) {
			kosztInstalacji += 8000
		} else if (kwh >= 2000 && kwh <= 7000) {
			kosztInstalacji += 21000
		} else if (kwh > 7000 && kwh <= 12000) {
			kosztInstalacji += 37000
		} else {
			wynikInstalacji.textContent = 'Zamówienie Niestandardowe, Skontaktuj się z nami'
		}
	}
	zapotrzebowanie.textContent = `${kwh.toFixed(1)} kWh`
	wynikInstalacji.textContent = `${kosztInstalacji} zł`
}
wycen.addEventListener('click', a => {
	a.preventDefault()
	handleWycena()
})
