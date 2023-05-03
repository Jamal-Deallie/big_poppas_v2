import { featureItems } from '@/data/featureItems';
import Image from 'next/image';
import styles from '@/styles/containers/Feature.module.scss';
import cn from 'classnames';
type Props = {};

export default function Feature({}: Props) {
  return (
    <section className={cn('bg-tertiary', styles['features'])}>
      <div className='main-cont'>
        <div className={styles['title']}>
          <h1 className='title-lrg clr-primary tac'>As Seen in</h1>
        </div>

        <div className={styles['grid-wrap']}>
          <div className={styles['grid']}>
            {featureItems.map(({ id, src, alt }) => {
              return (
                <div className={styles['item']} key={id}>
                  <div className={styles['logo']}>
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes='(max-width: 768px) 100vw)'
                      priority
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
