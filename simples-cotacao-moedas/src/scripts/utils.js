const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');

export function resultadoDaConversao() {
	const varInput1 = input1.valueAsNumber;
	const varInput2 = input2.valueAsNumber;
	document.querySelector('#res-converter').innerText = converte(varInput1, varInput2).toFixed(2);
}

export function converte(input1, input2) {
	return input1 * input2
}

const htmlElement = document.documentElement

export function toggleMode() {

	function darkMode() {
		let getLocalStorage = localStorage.getItem('themeMode')
		return htmlElement.dataset.theme = getLocalStorage
	}

	function lightMode() {
		let getLocalStorage = localStorage.getItem('themeMode')
		return htmlElement.dataset.theme = getLocalStorage
	}

	return { darkMode, lightMode }
}

toggleMode().darkMode()

const meuToggle = document.querySelector("#meuToggle")
const buttonCoverte = document.querySelector("#button-coverter")
const tipotheme = 'themeDark'

meuToggle.checked = true

meuToggle.addEventListener('click', () => {
	const mode = toggleMode()

	if (htmlElement.dataset.theme === tipotheme) {
		localStorage.setItem('themeMode', 'themeLight')
		mode.lightMode()
		meuToggle.checked = false
		buttonCoverte.innerHTML = '<img src="./src/assets/arrows-exchange.svg" alt="trocar moeda" />'
	} else {
		localStorage.setItem('themeMode', 'themeDark')
		mode.darkMode()
		meuToggle.checked = true
		buttonCoverte.innerHTML = '<img style="width: 15px;" src="./src/assets/arrows-dark.svg" alt="trocar moeda" />'
	}

})
