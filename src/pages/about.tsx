import SEO from '@/components/SEO';
import { SEOResults as Results } from '@/types/typings';
import Story from '@/containers/Story';
import TenCommandments from '@/containers/TenCommandments';

type PageProps = { seo?: Results };

export default function About({ seo }: PageProps) {
  return (
    <>
      <SEO {...seo} />
      <Story />
      <TenCommandments />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      id: 'about'
    }
  };
}
