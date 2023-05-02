import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import cn from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import styles from '@/styles/containers/About.module.scss';
import styles from '@/styles/containers/Story.module.scss';
type Props = {};

export default function Story({}: Props) {
  const root = useRef<HTMLDivElement | null>(null);

  return (
    <section className={styles['about']}>
      <div className='ptb-11' ref={root}>
        <div>
          <div className={styles['title']}>
            <h1 className='title-lrg tac clr-tertiary'>
              I'm not only a client,
            </h1>
            <h1 className='title-lrg tac'>I'm the playa President</h1>
          </div>
          <div className='grid-inner'>
            <div className={styles['desc']}>
              <div className={styles['logo']}>
                <Image
                  src={'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683002133/big_poppas/logo_secondary_kdcdvb.svg'}
                  alt='logo'
                  fill
                  sizes='(max-width: 768px) 100vw)'
                  priority
                />
              </div>
              <p className='txt clr-tertiary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className='txt clr-tertiary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className={styles['sig']}>
                <Image
                  fill
                  src={'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683002349/big_poppas/signature_h5rlvp.svg'}
                  sizes='(max-width: 768px) 100vw)'
                  alt='Voletta Wallace'
                />
              </div>
              <div className={styles['name']}>
                <span className='txt'>Voletta Wallace</span>
                <span className='txt'>Founder</span>
              </div>
            </div>

            <aside>
              <div className={styles['img']}>
                <Image
                  fill
                  src={'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683002349/big_poppas/voletta_wallace_aqekgf.jpg'}
                  sizes='(max-width: 768px) 100vw)'
                  alt='Voletta Wallace'
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
