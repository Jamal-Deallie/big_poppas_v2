import Link from 'next/link';
import NavLink from '@/components/NavLink';
import Menu from '@/components/Menu';
import Reservation from '@/containers/Reservation';
import Image from 'next/image';
import styles from '@/styles/components/Navbar.module.scss';
import cn from 'classnames';
import { links } from '@/data/linkItems';

export default function Navbar() {
  return (
    <nav className={cn('bg-secondary', styles['container'])}>
      <div className={styles.wrap}>
        <Menu />
        <div className={styles['logo-wrap']}>
          <Link href='/'>
            <div className={styles['logo']}>
              <Image
                src={'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683002133/big_poppas/logo_em3eg7.svg'}
                alt='logo'
                fill
                sizes={'(max-width: 768px) 100vw'}
                priority
              />
            </div>
          </Link>
        </div>

        <div className={styles.links}>
          {links.map(({ id, label, path }) => {
            return (
              <div key={id} id='links'>
                <NavLink href={path} passHref>
                  {label}
                </NavLink>
              </div>
            );
          })}
        </div>
        <div className={styles['options']}>
          <Reservation as={'icon'} />
        </div>
      </div>
    </nav>
  );
}
