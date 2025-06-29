import { json } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';
import { MDXProvider } from '@mdx-js/react';
import { Post, postMarkdown } from '~/layouts/post';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import { formatTimecode, readingTime } from '~/utils/timecode';

const experiences = {
  sleepiz: () => import("../experience.sleepiz.mdx"),
  widgetEdutech: () => import("../experience.widgetEdutech.mdx"),
  quepplin: () => import("../experience.quepplin.mdx"),
  "modern-styling-in-react": () => import("../experience.modern-styling-in-react.mdx"),
};

export async function loader({ request }) {
  const slug = request.url.split('/').at(-1);
  const getModule = experiences[slug];
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

export default function Experience() {
  const { frontmatter, timecode } = useLoaderData();

  return (
    <MDXProvider components={postMarkdown}>
      <Post {...frontmatter} timecode={timecode}>
        <Outlet />
      </Post>
    </MDXProvider>
  );
}
