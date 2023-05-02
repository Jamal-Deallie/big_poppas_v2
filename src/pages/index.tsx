import { Button } from '../components/Button';
import Layout from '@/components/Layout';
import Intro from '@/containers/Intro';
import Hero from '@/containers/Hero';
import Award from '@/containers/Award';

import Feature from '@/containers/Feature';
import Nutrition from '@/containers/Nutrition';
import Visit from '@/containers/Visit';
import Reviews from '@/containers/Reviews';
import MarquessTest from '@/components/MarquessTest';
import cn from 'classnames';
import styles from '@/styles/pages/Home.module.scss';
import Menu from './menu';
type Props = {};

export default function home({}: Props) {
  return (
    <Layout>
      <Hero />
      <Feature />
      <Intro />
      {/* <MenuPreview /> */}
      <Award />
      {/* <Nutrition /> */}
      <Reviews />
 

   
      <Visit />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      id: 'home',
    },
  };
}
