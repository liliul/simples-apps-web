import {getApiRandomUser} from '../api/index.ts';

export function CardIndex() {
	return (
		`
		${renderCard()}

		`
	)
}


function renderCard(api) {
	const {cell, dob, email, gender, id, location, name, phone, picture} = getApiRandomUser;

	return (
		`
			<h5>${phone}</h5>
			<h5>${email}</h5>
			<h5>${name.first}</h5>

		`
	)
}
