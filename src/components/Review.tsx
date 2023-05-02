import dynamic from 'next/dynamic';
import Image from 'next/image';
import cn from 'classnames';
import styles from '@/styles/components/Review.module.scss';

type ReviewProps = {
  src: string;
  review: string;
  name: string;
};

const FiveStars = dynamic(() => import('@/svgs/FiveStars'), {
  ssr: false,
});

export default function Review({ src, name, review }: ReviewProps) {
  return (
    <div className={cn(styles['review'], 'primary-bg')}>
      <div className={styles['inner']}>
        <div className={styles['img-wrap']}>
          <div className={cn(styles['img'], 'overlay')}>
            <Image
              src={src}
              alt={name}
              fill
              sizes={'(max-width: 768px) 100vw'}
            />
          </div>
        </div>
        <div className={styles['stars']}>
          <FiveStars />
        </div>
        <div>
          <p className='clr-tertiary mb-2'>{review}</p>

          <span>{name}</span>
        </div>
      </div>
    </div>
  );
}
