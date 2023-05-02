import Image from 'next/image';
import Reservation from '@/containers/Reservation';
import cn from 'classnames';
import styles from '@/styles/containers/Visit.module.scss';
type Props = {};

export default function Visit({}: Props) {
  return (
    <section className={cn('bg-primary', styles['visit'])}>
      <div>
        <div className='grid-inner'>
          <div className={styles['content']}>
            <h1 className='title-lrg clr-tertiary mb-3 gc-1'>
              Same Number <span className='clr-secondary'>Same Hood</span>
            </h1>

            <p className='txt clr-tertiary mt-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className='mt-3'>
              <Reservation as={'button'} />
            </div>
          </div>
          <aside className={cn(styles['img-wrap'], 'overlay')}>
            <div className={styles['img']}>
              <Image
                src={'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683002445/big_poppas/restaurant-interior_vu0ptw.webp'}
                alt='Big Poppas'
                fill
                sizes={'(max-width: 768px) 100vw'}
                priority
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
