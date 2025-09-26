import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import python from '~/assets/python.png';
import react from '~/assets/react.png';
import remix from '~/assets/remix.png';
import javascript from '~/assets/javascrip.png';
import nodejs from '~/assets/nodejs.png';
import nextjs from '~/assets/next.png';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Neeleshwar, currently I live in Patiala working as a Full stack Engineer at{' '}
      <Link href="experience">Sleepiz AG</Link>. My projects include NFT MarketPlace,
      Online betting platform. No code NFT generator, 3D interactive websites, cloud drive storage
      and more. If you’re interested in the tools and software, check out my{' '}
      <Link href="/techstack">TechStack</Link>.
    </Text>
    {/* <Text className={styles.description} data-visible={visible} size="l" as="p">    
    </Text> */}
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
              <div className={styles.row}>
                <Image
                  reveal
                  delay={100}
                  placeholder={react}
                  srcSet={`${react} 2w, ${react} 2w`}
                  style={{
                    width: "3em",
                    height: "3em"
                  }}
                  alt="react" />
                <Image
                  reveal
                  delay={100}
                  placeholder={nextjs}
                  srcSet={`${nextjs} 2w, ${nextjs} 2w`}
                  style={{
                    width: "3em",
                    height: "3em"
                  }}
                  alt="nextjs" />
                  <Image
                  reveal
                  delay={100}
                  placeholder={remix}
                  srcSet={`${remix} 2w, ${remix} 2w`}
                  style={{
                    width: "3em",
                    height: "3em",
                    scale: "1.2",
                    alignItems: "center",
                  }}
                  alt="remix" />
              </div>
              <div className={styles.row}>

                <Image
                  reveal
                  delay={100}
                  placeholder={javascript}
                  srcSet={`${javascript} 2w, ${javascript} 2w`}
                  style={{
                    width: "3em",
                    height: "3em"
                  }}
                  alt="javascript" />
                <Image
                  reveal
                  delay={100}
                  placeholder={nodejs}
                  srcSet={`${nodejs} 2w, ${nodejs} 2w`}
                  style={{
                    width: "3em",
                    height: "3em"
                  }}
                  alt="nodejs" />

                <Image
                  reveal
                  delay={100}
                  placeholder={python}
                  srcSet={`${python} 2w, ${python} 2w`}
                  style={{
                    width: "3em",
                    height: "3em"
                  }}
                  alt="python" />
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
