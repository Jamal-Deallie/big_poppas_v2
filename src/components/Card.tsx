import cn from 'classnames';
import Image from 'next/image';
import styles from '@/styles/components/Card.module.scss';

type SlideProps = {
  id?: number;
  src: string;
  title?: string;
  desc?: string;
  name: string;
};

export default function Card({ id, src, title, desc, name }: SlideProps) {
  return (
    <div className={cn(styles['card'], 'bg-tertiary')}>
      <div className={cn(styles['details'], 'clr-secondary')}>
        <span>Name</span>
        <span>$21.99</span>
      </div>
      <div className={cn(styles['img'], 'br')}>
        <Image
          alt={name}
          src={src}
          fill
          sizes={'(max-width: 768px) 100vw'}
          priority
        />
      </div>
    </div>
  );
}
