import { error } from '@sveltejs/kit';
import { getPost, posts } from '$lib/posts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => posts.map((post) => ({ slug: post.slug }));

export const load: PageLoad = ({ params }) => {
	if (!getPost(params.slug)) {
		error(404, 'Post not found');
	}

	return { slug: params.slug };
};
