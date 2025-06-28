import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Experience',
    pathname: '/experience',
  },
  {
    label: 'About me',
    pathname: '/#details',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Instagram',
    url: `https://bsky.app/profile/${config.bluesky}`,
    icon: 'instagram',
  },
  {
    label: 'Stack Overflow',
    url: `https://stackoverflow.com/users/${config.stackOverflow}`,
    icon: 'stackOverflow',
  },
  {
    label: 'Linkedin',
    url: `https://www.figma.com/${config.figma}`,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
