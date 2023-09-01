import {CardIndex} from '../components/index.ts';

export function Card(): string {
	return (
		`	
			<section id="card">
				${CardIndex()}
			</section>

		`
	)
}