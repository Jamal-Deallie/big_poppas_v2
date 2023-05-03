import styles from '@/styles/containers/Intro.module.scss';
import Image from 'next/image';
import { Button } from '@/components/Button';
import cn from 'classnames';
type Props = {};

export default function Intro({}: Props) {
  return (
    <section className={cn('bg-primary', styles['intro'])}>
      <div>
        <div className='grid-inner'>
          <div className={styles['content']}>
            <h1 className='title-lrg clr-secondary mb-3 gc-1'>
              And if you {`don't`}
              <span className='clr-tertiary'> know, now you know</span>
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
              <Button
                bgc={'secondary'}
                size={'lrg'}
                font={'heading'}
                component={'link'}
                href={'about'}>
                Learn More
              </Button>
            </div>
          </div>
          <aside className={styles['pizza']}>
            <div className={styles['img']}>
              <Image
                src={'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683002315/big_poppas/intro_xqhg5d.jpg'}
                alt='logo'
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
