interface User {
	cell: string;
	dob: {
		age: number;
	};
	email: string;
	gender: string;
	id: {
		value: string;
	};
	location: {
		city: string;
		country: string;
		state: string;
	};
	name: {
		title: string;
		first: string;
		last: string;
	};
	phone: string;
	picture: {
		medium: string;
	};
	nat: string;
}

export default function renderCard(api: User): void {
	const { cell, dob, email, gender, id, location, name, phone, picture, nat } = api;

	const div = document.createElement('div')
	div.innerHTML = `
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

	`;

	document.querySelector<HTMLDivElement>("#card").appendChild(div)
}