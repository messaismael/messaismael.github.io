import { error } from '@sveltejs/kit';

export function load() {
	error(404, 'Work page not found');
}
