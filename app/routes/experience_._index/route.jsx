import { baseMeta } from '~/utils/meta';
import { getPosts } from './posts.server';
import { json } from '@vercel/remix';

export async function loader() {
  const allPosts = await getPosts();
  const featured = allPosts.filter(post => post.frontmatter.featured)[0];
  const posts = allPosts.filter(post => featured?.slug !== post.slug);

  return json({ posts, featured });
}

export function meta() {
  return baseMeta({
    title: 'Experience',
    description:
      'My Job experience in a nutshell.',
  });
}

export { Experience as default } from './experience';
