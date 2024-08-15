const trueFalse = true;

function h1() {
	return (`
		<h1 class='h1'>function javascript</h1>
	`)
}

const cardDrawcss = `
	width: 100%;
	height: 100%;
	background-color: #999;
	border-radius: 8px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
`;

const cardDrawSpan1css = `
	width: 30%;
	height: 10px;
	background-color: black;
`;

const cardDrawSpan2css = `
	width: 30%;
	height: 10px;
	background-color: purple;
`;

const cardDrawSpan3css = `
	width: 30%;
	height: 10px;
	background-color: white;
`;

export const utils = {
    trueFalse,
    h1,
	cardDrawcss,
	cardDrawSpan1css,
	cardDrawSpan2css,
	cardDrawSpan3css
}

