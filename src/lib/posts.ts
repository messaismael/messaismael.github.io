export interface PostMetadata {
	layout: 'post';
	title: string;
	subtitle?: string;
	date: string;
	'gh-repo'?: string;
	'gh-badge'?: string[];
	'cover-img'?: string;
	'thumbnail-img'?: string;
	tags?: string[];
	comments?: boolean;
}

export interface Post {
	slug: string;
	metadata: PostMetadata;
	component: unknown;
}

const modules = import.meta.glob<{ metadata: PostMetadata; default: unknown }>(
	'/src/lib/posts/*.md',
	{ eager: true }
);

export const posts: Post[] = Object.entries(modules)
	.map(([path, mod]) => ({
		slug: path.replace('/src/lib/posts/', '').replace('.md', ''),
		metadata: mod.metadata,
		component: mod.default
	}))
	.sort((a, b) => (a.metadata.date < b.metadata.date ? 1 : -1));

export function getPost(slug: string): Post | undefined {
	return posts.find((post) => post.slug === slug);
}
