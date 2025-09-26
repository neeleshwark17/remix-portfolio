import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import exploreMore from '~/assets/explore-more.png';
import devColony from '~/assets/dev-col.png';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { ProjectsList } from './projects-list';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Developer',
    description: `Design portfolio of ${config.name} — a software engineer working on web & mobile apps.`,
  });
};

export default function Home() {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="NFT MarketPlace specialized for 3D assets"
        description="Discover. Own. Trade.
Secured on Ethereum. Stored on IPFS with Pinata.
Welcome to the future of NFTs."
        buttonText="View project"
        buttonLink="/projects/binary-nft"
        model={{
          type: 'laptop',
          alt: 'NFT MarketPlace',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Beef Bro - Friendly fitness challenges!"
        buttonLink="/projects/beef-bro"
        description="Design and development in React Native,
         A social fitness app where users create and join friendly fitness
         challenges with friends, family, or the community. The focus is on
         motivation, fun, and healthy competition"
        buttonText="View project"
        model={{
          type: 'phone',
          alt: 'App screen',
          textures: [
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="DevColony"
        description="A mentorship platform for developers to learn and grow together"
        buttonText="View project"
        buttonLink="/projects/dev-colony"
        model={{
          type: 'laptop',
          alt: 'DevColony',
          textures: [
            {
              srcSet: `${devColony} 800w, ${devColony} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        alternate
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Crashed - Online betting platform"
        description="Betting platform built in nextJS and nodeJS along with socket support for handling multiple realtime users.
        The platform is built for a client and is not publicly available, yet the smaple is available"
        buttonShow={false}
        buttonText="View project"
        // buttonLink="/projects/binary-nft"
        model={{
          type: 'phone',
          alt: 'Crashed',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="MineCraft ThreeJS"
        description="A minimalistic minecraft clone made in ThreeJS"
        buttonText="View project"
        buttonLink="/projects/minecraft"
        model={{
          type: 'laptop',
          alt: 'Minecraft',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectsList
        id="project-6"
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="Working on more projets"
        description="Other side projects i have been working on, personal, freelance etc."
        buttonText="Explore"
        buttonLink="/projects/projects-list"
        buttonShow={false}
        model={{
          type: 'laptop',
          alt: 'Explore',
          textures: [
            {
              srcSet: `${exploreMore} 800w, ${exploreMore} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
            {
              srcSet: `${exploreMore} 800w, ${exploreMore} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />


      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
}
