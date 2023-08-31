import {getApiRandomUser} from '../api/index.ts';

export async function CardIndex() {
	const randomUser =  await getApiRandomUser();
	console.log(randomUser, 'rr')
	randomUser.forEach((getApi) => renderCard(getApi))

	return randomUser			  
}

function renderCard(api) {
	const {cell, dob, email, gender, id, location, name, phone, picture, nat} = api;

	document.querySelector<HtmlSectionElement>("#card").innerHTML +=`
		<article class='cards'data-id='${id.value}'>
			<section class='c-img'>
				<img src='${picture.medium}' alt='Img' />
			</section>

			<section class='names'>
				${name.title} ${name.first} ${name.last}
			</section>

			<section class='local'>
				<b>${location.country}</b>
				<b>${location.state}</b>
				<b>${location.city}</b>
			</section>

			<section class='infos'>
				<span>${nat}</span>
				<span>${gender}</span>
				<span>${phone}</span>
				<span>${email}</span>
				<span>${cell}</span>
				<span>${dob.age}</span>
			</section>
		</article>

	`
}
