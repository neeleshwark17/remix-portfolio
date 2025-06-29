import { json } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';
import { MDXProvider } from '@mdx-js/react';
import { Post, postMarkdown } from '~/layouts/post';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import { formatTimecode, readingTime } from '~/utils/timecode';

const articles = {
  nextjs: () => import("../articles.nextjs.mdx"),
  web3: () => import("../articles.web3.mdx"),
};

export async function loader({ request }) {
  let url = request.url;
  if (!url) {
    const host = request.headers.get("host");
    url = `https://${host}${request.originalUrl || request.path || "/"}`;
  }
  const slug = url.split('/').at(-1);
  const getModule = articles[slug];
  if (!getModule) {
    throw new Response("Not Found", { status: 404 });
  }
  const module = await getModule();
  const text = await getModule(); // If you need raw text, adjust this line
  const readTime = readingTime(text.default);
  const ogImage = `${config.url}/static/${slug}-og.jpg`;

  return json({
    ogImage,
    frontmatter: module.frontmatter,
    timecode: formatTimecode(readTime),
  });
}

export function meta({ data }) {
  const { title, abstract } = data.frontmatter;
  return baseMeta({ title, description: abstract, prefix: '', ogImage: data.ogImage });
}

export default function Articles() {
  const { frontmatter, timecode } = useLoaderData();

  return (
    <MDXProvider components={postMarkdown}>
      <Post {...frontmatter} timecode={timecode}>
        <Outlet />
      </Post>
    </MDXProvider>
  );
}
