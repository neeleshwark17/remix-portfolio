import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './techstack.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Tech Stack',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const TechStack = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Tech Stack"
          description="I build full-stack web apps—from clean UIs with React to robust APIs with Node.js—turning ideas into scalable, production-ready products. And yes, the backend logs always have a story to tell."
        />

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading> Front End</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="#">React and NextJS</Link> are my front end Javascript
                    library of choice. The component-centric mental model is the first
                    thing that truly made sense to me as a designer.
                  </ListItem>
                  <ListItem>
                    For 3D effects I use <Link href="https://threejs.org/">three.js</Link>
                    . Its a bit complex with those effects in shaders using GLSL but it
                    can give great results.
                  </ListItem>
                  <ListItem>
                    For UI I’ve used various component libraries like antd, materialUI,
                    coreUI etc and for styling CSS/SCSS, tailwind styled-components.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading> Back End</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="#">NodeJS</Link> along with express or HAPI usally is my
                    goto choice, but nowdays i have switched to springboot.
                  </ListItem>
                  <ListItem>
                    For Database{' '}
                    <Link href="#">
                      MYSQL, MongoDB, Firesbase(FireStore,RealtimeDB), DynamoDB and S3
                      etc.
                    </Link>
                    There are lots of choices specially in Nosql DBs. I usually go with
                    whichever fits bets according to the costing and the use case.
                  </ListItem>
                  <ListItem>
                    Other tools like for pipeline and CI/CD I use apache kafka, Jenkins,
                    AWS, Heroku etc along with docker and kubernetes.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        {/* <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> is my primary tool for
                    UI design these days. Made the switch from Sketch in 2020 and haven’t
                    looked back. I’ve also created{' '}
                    <Link href="https://www.figma.com/@neeleshwark17">a few plugins</Link>{' '}
                    that you can install.
                  </ListItem>
                  <ListItem>
                    Any motion graphics I create are created in Adobe After Effects. So
                    far I haven’t found a non-Adobe product that’s as good. If anyone has
                    suggestions please <Link href="/contact">message me</Link>.
                  </ListItem>
                  <ListItem>
                    For any 3D models and video editing I use{' '}
                    <Link href="https://www.blender.org/">Blender</Link>. Since 2.8 it’s
                    become way simpler to use and in a lot of ways better than expensive
                    paid tools like 3DS Max or Maya.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Desktop</TableHeadCell>
                    <TableCell>Custom built</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Arch Linux (by the way)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Browser</TableHeadCell>
                    <TableCell>Zen Browser</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>1440p IPS 144hz LG 27GL850</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Tofu65</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Logitech G403</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Macbook Pro 14″</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>Audio Technica ATH-M50x/Apple Airpods</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Microphone</TableHeadCell>
                    <TableCell>Blue Yeti</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection> */}
      </ProjectContainer>
      <Footer />
    </>
  );
};
