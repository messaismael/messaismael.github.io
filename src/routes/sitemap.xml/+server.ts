import { posts } from '$lib/posts';
import type { RequestHandler } from './$types';

const publicPages = [
	{ path: '/', priority: '1.0' },
	{ path: '/about/', priority: '0.8' },
	{ path: '/experience/', priority: '0.8' },
	// { path: '/work/', priority: '0.8' },
	{ path: '/blog/', priority: '0.7' }
];

const escapeXml = (value: string) =>
	value.replace(
		/[<>&'"]/g,
		(character) =>
			(
				({
					'<': '&lt;',
					'>': '&gt;',
					'&': '&amp;',
					"'": '&apos;',
					'"': '&quot;'
				}) as Record<string, string>
			)[character]
	);

const urlEntry = (siteUrl: string, path: string, priority: string, lastmod?: string) => `
	<url>
		<loc>${escapeXml(`${siteUrl}${path}`)}</loc>
		${lastmod ? `<lastmod>${escapeXml(lastmod)}</lastmod>` : ''}
		<priority>${priority}</priority>
	</url>`;

export const prerender = true;

export const GET: RequestHandler = ({ url }) => {
	const pageEntries = publicPages.map(({ path, priority }) => urlEntry(url.origin, path, priority));
	const postEntries = posts.map((post) =>
		urlEntry(url.origin, `/blog/${encodeURIComponent(post.slug)}/`, '0.6', post.metadata.date)
	);

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pageEntries.join('')}${postEntries.join('')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
};
