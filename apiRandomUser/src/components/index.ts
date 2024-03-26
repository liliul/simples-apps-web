import { getApiRandomUser } from '../api/index.ts';
import RenderCard from '../pages/renderCard.ts';

export async function CardIndex() {
	const randomUser = await getApiRandomUser();
	console.log(randomUser, 'rr')
	randomUser.map((getApi) => RenderCard(getApi))

	return randomUser
}
