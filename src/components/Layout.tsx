import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import cn from 'classnames';
import styles from '@/styles/components/Layout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles['layout']}>
      <Navbar />
      <main className={cn(styles['main-wrap'], 'gradient-bg')}>{children}</main>
      <Footer />
    </div>
  );
}
