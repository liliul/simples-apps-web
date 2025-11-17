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
		return htmlElement.dataset.theme = 'themeDark'
	}

	function lightMode() {
		return htmlElement.dataset.theme = 'themeLight'
	}

	return { darkMode, lightMode }
}

const meuToggle = document.querySelector("#meuToggle")
const buttonCoverte = document.querySelector("#button-coverter")
const tipotheme = localStorage.getItem('themeMode') || 'themeDark'
const imgConverter = localStorage.getItem('imgConverter')

localStorage.setItem('imgConverter', './src/assets/arrows-exchange.svg')
meuToggle.checked = true

if (tipotheme === "themeDark") {
	htmlElement.dataset.theme = "themeDark";
	buttonCoverte.innerHTML = '<img style="width: 15px;" src="./src/assets/arrows-dark.svg" alt="trocar moeda" />';
	meuToggle.checked = true;
} else {
	htmlElement.dataset.theme = "themeLight";
	buttonCoverte.innerHTML = `<img src="${imgConverter}" alt="trocar moeda" />`;
	meuToggle.checked = false;
}

meuToggle.addEventListener('click', () => {
	const mode = toggleMode()

	if (htmlElement.dataset.theme === 'themeDark') {
		localStorage.setItem('themeMode', 'themeLight')
		mode.lightMode()
		meuToggle.checked = false
		buttonCoverte.innerHTML = `<img src="${imgConverter}" alt="trocar moeda" />`
	} else {
		localStorage.setItem('themeMode', 'themeDark')
		mode.darkMode()
		meuToggle.checked = true
		buttonCoverte.innerHTML = '<img style="width: 15px;" src="./src/assets/arrows-dark.svg" alt="trocar moeda" />'
	}

})
