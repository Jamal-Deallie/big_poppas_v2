import Image from 'next/image';
import styles from '@/styles/containers/Hero.module.scss';
import cn from 'classnames';
type Props = {};

export default function Hero({}: Props) {
  return (
    <section className={cn(styles['hero'], 'bg-secondary')}>
      <div className='grid-inner'>
        <div className={styles['hero']}>
          <div className={styles['img-cont']}>
            <div className={styles['img']}>
              <Image
                src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683002423/big_poppas/hero_gnbmxh.webp'
                alt='Hero'
                fill
                sizes='(max-width: 768px) 100vw)'
                priority
              />
            </div>
          </div>
          <div className={styles['cta']}>
            <div className={styles['inner']}>
              <div className='grid-inner'>
                <div className={styles['title']}>
                  <h1 className={styles['hero-title']}>
                    <span className={styles['accent']}>We</span> Love
                  </h1>
                  <h1 className={styles['hero-title']}>
                    The <span className={styles['underline']}>Dough</span>
                  </h1>
                </div>
                <div className={styles['desc']}>
                  <p className='txt'>
                    Immerse yourself in the world of the Notorious B.I.G at Big
                    Poppa's Pizzeria, where the pizzas are always juicy and the
                    flavors are notorious.
                  </p>
                </div>

                <button className={styles['btn']}>Book A Table</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
