import Image from 'next/image';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import styles from '@/styles/containers/Award.module.scss';

const Logo = dynamic(() => import('@/svgs/Logo'), { ssr: false });

type Props = {};

export default function Award({}: Props) {
  return (
    <section className={cn('bg-tertiary', styles['award'])}>
      <div className='ptb-11'>
        <div className='grid-inner'>
          <div className={styles['img-wrap']}>
            <div className={styles['img']}>
              <Image
                src={'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683002285/big_poppas/award_jwldym.jpg'}
                alt='logo'
                fill
                sizes='(max-width: 768px) 100vw)'
                priority
              />
            </div>
            <div className={styles['star-wrap']}>
              <div className={styles['star']}>
                <Image
                  src={'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683002283/big_poppas/star-award_cdljcv.svg'}
                  alt='logo'
                  fill
                  sizes='(max-width: 768px) 100vw)'
                  priority
                />
              </div>
              <div className={styles['caption']}>
                <p className='clr-tertiary tac'>Patrón of The Year Award</p>
              </div>
            </div>
          </div>
          <aside className={cn(styles['content'], 'mt-6')}>
            <div className={cn(styles['title'], 'mb-6')}>
              <h1 className='title-lrg clr-secondary'>PIZZAria Of</h1>
              <h1 className='title-lrg clr-primary'>THE YEAR</h1>
            </div>
            <p className='txt clr-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
