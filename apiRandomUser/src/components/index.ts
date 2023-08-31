import {getApiRandomUser} from '../api/index.ts';

export async function CardIndex() {
	const randomUser =  await getApiRandomUser();
	console.log(randomUser, 'rr')
	randomUser.forEach((getApi) => renderCard(getApi))

	return randomUser			  
}
// window.onload = function(){
// 	CardIndex()
//}

function renderCard(api) {
	const {cell, dob, email, gender, id, location, name, phone, picture, nat} = api;
	// const {phone, email, name}=api
	// console.log(phone)
	// return (
	// 	`
	// 		<h5>${phone}</h5>
	// 		<h5>${email}</h5>
	// 		<h5>${name.first}</h5>

	// 	`
	// )

	// const containerImg = document.createElement('div')
	// 	containerImg.classList.add('c-img')
	// const imgPicture = document.createElement('img')
	// 	imgPicture.src = picture.medium


	// containerImg.appendChild(imgPicture)

	// const cards = document.createElement('article')
	// 	cards.classList.add('cards')
	// cards.appendChild(containerImg)

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
