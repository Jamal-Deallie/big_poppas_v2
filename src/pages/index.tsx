import SEO from '@/components/SEO';
import { SEOResults as Results } from '@/types/typings';
import Intro from '@/containers/Intro';
import Hero from '@/containers/Hero';
import Award from '@/containers/Award';
import Feature from '@/containers/Feature';
import Visit from '@/containers/Visit';
import Reviews from '@/containers/Reviews';

type PageProps = { seo?: Results };

export default function Home({seo}: PageProps) {
  return (
    <>
      <SEO {...seo} />
      <Hero />
      <Feature />
      <Intro />
      <Award />
      <Reviews />
      <Visit />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      id: 'home'
    }
  };
}
