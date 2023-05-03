import Form from '@/components/Form';
import SEO from '@/components/SEO';
import { SEOResults as Results } from '@/types/typings';
import dynamic from 'next/dynamic';
import styles from '@/styles/pages/Contact.module.scss';
import cn from 'classnames';

type PageProps = { seo?: Results };

const DynamicMap = dynamic(() => import('@/components/Map'), {
  ssr: false
});

export default function About({ seo }: PageProps) {
  return (
    <>
      <SEO {...seo} />
      <section className={cn(styles['contact'], 'ptb-11')}>
        <div className="mtb-11">
          <div className="grid-inner">
            <div className={styles['title']}>
              <h1 className="title-lrg">Any</h1>
              <h1 className="title-lrg">Questions?</h1>
            </div>

            <div className={cn(styles['items'], 'mt-3')}>
              <div className={cn(styles['number'], 'mb-3')}>
                <h6>Number</h6>
                <p className="txt">123-444-5555</p>
              </div>

              <div className={cn(styles['email'], 'mb-3')}>
                <h6>Email</h6>
                <p className="txt">questions@bigpoppas.com</p>
              </div>
              <div className={cn(styles['hours'], 'mb-3')}>
                <h6>Hours</h6>
                <p className="txt">
                  Mon-Fri: 9:00am - 11:30pm <br /> Sat-Sun: 11:00am - 1:30am
                </p>
              </div>

              <div className={styles['address']}>
                <h6>Address</h6>
                <p className="txt">159 Carlton Ave, Brooklyn, NY 11205</p>
              </div>
              <div className={styles['map-wrap']}>
                <DynamicMap />
              </div>
            </div>

            <div className={styles['form-wrap']}>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      id: 'contact'
    }
  };
}
