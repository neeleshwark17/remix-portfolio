import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import rick from '~/assets/rick.jpeg';
import { Image } from '~/components/image';
import { Fragment, Suspense, lazy, useEffect, useRef, useState } from 'react';
import { classes, cssProps, media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './volkihar-knight.module.css';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Divider } from '~/components/divider';
import { ProjectBackground, ProjectContainer, ProjectHeader } from '~/layouts/project';
import { useWindowSize } from '~/hooks';
import { DecoderText } from '~/components/decoder-text';
import { useReducedMotion } from 'framer-motion';

const title = 'Side Projects List';
const description =
  '';
const roles = ['Front End', 'Bakend', 'Web3'];


export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

function ArticlesPost({ frontmatter, index }) {
  const { title, abstract, featured, banner } = frontmatter;
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return <article
    className={styles.post}
    data-featured={!!featured}
    style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
  >
    {featured && (
      <Text className={styles.postLabel} size="s">
        devto
      </Text>
    )}
    {featured && !!banner && (
      <div className={styles.postImage}>
        <Image
          noPauseButton
          play={!reduceMotion ? hovered : undefined}
          src={banner}
          placeholder={`${banner.split('.')[0]}-placeholder.jpg`}
          alt=""
          role="presentation"
        />
      </div>
    )}
    <div
      className={styles.postLink}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.postDetails}>
        <div aria-hidden className={styles.postDate}>
          <Divider notchWidth="64px" notchHeight="8px" />
        </div>
        <Heading as="h2" level={featured ? 2 : 4}>
          {title}
        </Heading>
        <Text size={featured ? 'l' : 's'} as="p">
          {abstract}
        </Text>
      </div>
    </div>
    {featured && (
      <Text aria-hidden className={styles.postTag} size="s">
        000
      </Text>
    )}
  </article>;
}

export function ProjectsList() {
  const posts = [
    {
      "slug": "web3",
      "timecode": "00:00:58:66",
      "frontmatter": {
        "title": "Web3, NFTs & Solidity in 2025: Trends, Tools & What’s Next",
        "abstract": "A look into how the Web3 space is evolving in 2025—covering AI-powered NFTs, Solidity’s ongoing dominance, real-world tokenization, and emerging tools reshaping decentralized tech.",
        "date": "2025-05-08",
        "banner": "/static/hello-world-banner.jpg"
      }
    }
  ];

  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;

  const postsHeader = (
    <header className={styles.header}>
      <Heading className={styles.heading} level={5} as="h1">
        <DecoderText text="Unfinished personal projects" />
      </Heading>
    </header>
  );

  const postList = (
    <div className={styles.list}>
      {!isSingleColumn && postsHeader}
      {posts.map(({ slug, ...post }, index) => (
        <ArticlesPost key={slug} slug={slug} index={index} {...post} />
      ))}
      {Array(2)
        .fill()
        .map((skeleton, index) => (
          <SkeletonPost key={index} index={index} />
        ))}
    </div>
  );

  let dataFrontMatter = {
    "slug": "nextjs",
    "timecode": "00:00:38:93",
    "frontmatter": {
      "title": "Next.js 15 in 2025- Why It’s Still the Framework to Beat",
      "abstract": "A forward look at how Next.js 15 .",
      "date": "2025-05-22",
      "banner": "/static/modern-styling-in-react-banner.jpg",
      "featured": true
    }
  };

  const projectsLog = <ArticlesPost
    // posts={[
    //   {
    //     "slug": "web3",
    //     "timecode": "00:00:58:66",
    //     "frontmatter": {
    //       "title": "Web3, NFTs & Solidity in 2025: Trends, Tools & What’s Next",
    //       "abstract": "A look into how the Web3 space is evolving in 2025—covering AI-powered NFTs.",
    //       "date": "2025-05-08",
    //       "banner": "/static/hello-world-banner.jpg"
    //     }
    //   }
    // ]}
    {...dataFrontMatter}
  />;


  return (
    <Fragment
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --primary: oklch(87.71% 0.084 85.29);
              --accent: oklch(87.71% 0.084 85.29);
            }
            [data-theme='light'] {
              --primary: oklch(52.25% 0.121 81.53);
              --accent: oklch(52.25% 0.121 81.53);
            }
          `,
        }}
      />

      <ProjectContainer>
        <ProjectBackground
          srcSet={`${rick} 1280w, ${rick} 1920w`}
          width={1280}
          height={720}
          placeholder={rick}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="Github"
          url="https://github.com/neeleshwark17?tab=repositories"
          roles={roles}
        />

        {postList}
        {projectsLog}
      </ProjectContainer>


      <Footer />
    </Fragment>
  );
}


function SkeletonPost({ index }) {
  return (
    <article
      aria-hidden="true"
      className={classes(styles.post, styles.skeleton)}
      data-featured="false"
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      <div className={styles.postLink}>
        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
            Coming soon...
          </div>
          <Heading
            className={styles.skeletonBone}
            as="h2"
            level={4}
            style={{ height: 24, width: '70%' }}
          />
          <Text
            className={styles.skeletonBone}
            size="s"
            as="p"
            style={{ height: 90, width: '100%' }}
          />
          <div className={styles.postFooter}>
            <Button secondary iconHoverShift icon="chevron-right" as="div">
              Read more
            </Button>
            <Text className={styles.timecode} size="s">
              00:00:00:00
            </Text>
          </div>
        </div>
      </div>
    </article>
  );
}
{/* 
        <SkeletonPost/> */}