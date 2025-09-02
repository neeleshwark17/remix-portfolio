import { Button } from '~/components/button';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { deviceModels } from '~/components/model/device-models';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { useTheme } from '~/components/theme-provider';
import { Transition } from '~/components/transition';
import { Loader } from '~/components/loader';
import { useWindowSize } from '~/hooks';
import { Suspense, lazy, useEffect, useState } from 'react';
import { cssProps, media } from '~/utils/style';
import { useHydrated } from '~/hooks/useHydrated';
import katakana from './katakana.svg';
import styles from './project-summary.module.css';
import { useReducedMotion } from 'framer-motion';
import { formatDate } from '~/utils/date';
import { Image } from '~/components/image';
import { Link as RouterLink } from '@remix-run/react';

const Model = lazy(() =>
    import('~/components/model').then(module => ({ default: module.Model }))
);


function ArticlesPost({ slug, frontmatter, timecode, index }) {
    const [hovered, setHovered] = useState(false);
    const [dateTime, setDateTime] = useState(null);
    const reduceMotion = useReducedMotion();
    const { title, abstract, date, featured, banner } = frontmatter;

    useEffect(() => {
        setDateTime(formatDate(date));
    }, [date, dateTime]);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <article
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
            <RouterLink
                unstable_viewTransition
                prefetch="intent"
                to={`/articles/${slug}`}
                className={styles.postLink}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className={styles.postDetails}>
                    <div aria-hidden className={styles.postDate}>
                        <Divider notchWidth="64px" notchHeight="8px" />
                        {dateTime}
                    </div>
                    <Heading as="h2" level={featured ? 2 : 4}>
                        {title}
                    </Heading>
                    <Text size={featured ? 'l' : 's'} as="p">
                        {abstract}
                    </Text>
                    <div className={styles.postFooter}>
                        <Button secondary iconHoverShift icon="chevron-right" as="div">
                            Read article
                        </Button>
                    </div>
                </div>
            </RouterLink>
            {featured && (
                <Text aria-hidden className={styles.postTag} size="s">
                    000
                </Text>
            )}
        </article>
    );
}
export function ProjectsList({
    id,
    visible: sectionVisible,
    sectionRef,
    index,
    title,
    description,
    model,
    buttonText,
    buttonLink,
    alternate,
    buttonShow = true,
    ...rest
}) {
    const [focused, setFocused] = useState(false);
    const [modelLoaded, setModelLoaded] = useState(false);
    const { theme } = useTheme();
    const { width } = useWindowSize();
    const isHydrated = useHydrated();
    const titleId = `${id}-title`;
    const isMobile = width <= media.tablet;
    const svgOpacity = theme === 'light' ? 0.7 : 1;
    const indexText = index < 10 ? `0${index}` : index;
    const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;

    function handleModelLoad() {
        setModelLoaded(true);
    }

    function renderKatakana(device, visible) {
        return (
            <svg
                type="project"
                data-visible={visible && modelLoaded}
                data-light={theme === 'light'}
                style={cssProps({ opacity: svgOpacity })}
                className={styles.svg}
                data-device={device}
                viewBox="0 0 751 136"
            >
                <use href={`${katakana}#katakana-project`} />
            </svg>
        );
    }

    function renderDetails(visible) {
        return (
            <div className={styles.details}>
                <div aria-hidden className={styles.index}>
                    <Divider
                        notchWidth="64px"
                        notchHeight="8px"
                        collapsed={!visible}
                        collapseDelay={1000}
                    />
                    <span className={styles.indexNumber} data-visible={visible}>
                        {indexText}
                    </span>
                </div>
                <Heading
                    level={3}
                    as="h2"
                    className={styles.title}
                    data-visible={visible}
                    id={titleId}
                >
                    {title}
                </Heading>
                <Text className={styles.description} data-visible={visible} as="p">
                    {description}
                </Text>
                <div className={styles.button} data-visible={visible}>
                    {buttonShow && <Button iconHoverShift href={buttonLink} iconEnd="arrow-right">
                        {buttonText}
                    </Button>}
                </div>
            </div>
        );
    }

    function renderPreview(visible) {
        return (
            <div className={styles.preview}>
                <>
                    {renderKatakana('laptop', visible)}
                    <div className={styles.model} data-device="laptop">
                        {!modelLoaded && (
                            <Loader center className={styles.loader} data-visible={visible} />
                        )}
                        {isHydrated && visible && (
                            <Suspense>
                                <Model
                                    alt={model.alt}
                                    cameraPosition={{ x: 0, y: 0, z: 7 }}
                                    // cameraPosition={{ x: 0, y: 0, z: 0 }}
                                    showDelay={700}
                                    onLoad={handleModelLoad}
                                    show={visible}
                                    models={[
                                        {
                                            ...deviceModels.laptop,
                                            texture: {
                                                ...model.textures[0],
                                                sizes: laptopSizes,
                                            },
                                        },
                                        // {
                                        //     ...deviceModels.phone,
                                        //     position: { x: 0.6, y: -0.5, z: 0.3 },
                                        //     texture: {
                                        //         ...model.textures[1],
                                        //         sizes: phoneSizes,
                                        //     },
                                        // },
                                    ]}
                                />
                            </Suspense>
                        )}
                    </div>
                </>
            </div>
        );
    }

    return (
        <Section
            className={styles.summary}
            data-alternate={alternate}
            data-first={index === 1}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            as="section"
            aria-labelledby={titleId}
            ref={sectionRef}
            id={id}
            tabIndex={-1}
            {...rest}
        >
            <div className={styles.content}>
                <Transition in={sectionVisible || focused}>
                    {({ visible }) => (
                        <>
                            {!alternate && !isMobile && (
                                <>
                                    {renderDetails(visible)}
                                    {renderPreview(visible)}
                                </>
                            )}
                            {(alternate || isMobile) && (
                                <>
                                    {renderPreview(visible)}
                                    {renderDetails(visible)}
                                </>
                            )}
                        </>
                    )}
                </Transition>
            </div>
        </Section>
    );
}
