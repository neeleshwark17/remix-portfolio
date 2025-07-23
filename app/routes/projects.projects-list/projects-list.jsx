import volkiharBackgroundLarge from '~/assets/volkihar-background-large.jpg';
import volkiharBackgroundPlaceholder from '~/assets/volkihar-background-placeholder.jpg';
import volkiharBackground from '~/assets/volkihar-background.jpg';
import volkiharBannerLarge from '~/assets/volkihar-banner-large.jpg';
import volkiharBannerPlaceholder from '~/assets/volkihar-banner-placeholder.jpg';
import volkiharBanner from '~/assets/volkihar-banner.jpg';
import volkiharBookLarge from '~/assets/volkihar-book-large.png';
import volkiharBookPlaceholder from '~/assets/volkihar-book-placeholder.png';
import volkiharBook from '~/assets/volkihar-book.png';
import volkiharEnderalLarge from '~/assets/volkihar-enderal-large.jpg';
import volkiharEnderalLogoLarge from '~/assets/volkihar-enderal-logo-large.png';
import volkiharEnderalLogoPlaceholder from '~/assets/volkihar-enderal-logo-placeholder.png';
import volkiharEnderalLogo from '~/assets/volkihar-enderal-logo.png';
import volkiharEnderalPlaceholder from '~/assets/volkihar-enderal-placeholder.jpg';
import volkiharEnderal from '~/assets/volkihar-enderal.jpg';
import volkiharSlide1Large from '~/assets/volkihar-slide-1-large.jpg';
import volkiharSlide1 from '~/assets/volkihar-slide-1.jpg';
import volkiharSlide2Large from '~/assets/volkihar-slide-2-large.jpg';
import volkiharSlide2 from '~/assets/volkihar-slide-2.jpg';
import volkiharSlide3Large from '~/assets/volkihar-slide-3-large.jpg';
import volkiharSlide3 from '~/assets/volkihar-slide-3.jpg';
import volkiharSlidePlaceholder from '~/assets/volkihar-slide-placeholder.jpg';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment, Suspense, lazy } from 'react';
import { classes, cssProps, media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { VolkiharLogo } from './volkihar-logo';
import styles from './volkihar-knight.module.css';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Divider } from '~/components/divider';

const Carousel = lazy(() =>
  import('~/components/carousel').then(module => ({ default: module.Carousel }))
);

// const Armor = lazy(() => import('./armor').then(module => ({ default: module.Armor })));

const title = 'Projects List';
const description =
  'Side projects list';
const roles = ['Front End', 'Bakend', 'Web3'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export function ProjectsList() {
  return (
    <Fragment>
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
          srcSet={`${volkiharBackground} 1280w, ${volkiharBackgroundLarge} 1920w`}
          width={1280}
          height={720}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="Github"
          url="https://www.nexusmods.com/skyrimspecialedition/mods/4806/"
          roles={roles}
        />
        {/* <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${volkiharBanner} 800w, ${volkiharBannerLarge} 1100w`}
              width={800}
              height={436}
              placeholder={volkiharBannerPlaceholder}
              alt="A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection> */}
        {/* <ProjectSection>
          <ProjectSectionContent>
            <Image
              srcSet={`${volkiharBook} 490w, ${volkiharBookLarge} 960w`}
              width={480}
              height={300}
              placeholder={volkiharBookPlaceholder}
              alt="A book containing a sketch depicting the logo and armor"
              sizes={`(max-width: ${media.mobile}px) 90vw, (max-width: ${media.tablet}px) 80vw, 70vw`}
            />
          </ProjectSectionContent>
        </ProjectSection> */}
        
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
