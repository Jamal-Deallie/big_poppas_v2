import Review from '@/components/Review';
import { reviewItems } from '@/data/reviewItems';
import cn from 'classnames';
import styles from '@/styles/containers/Reviews.module.scss';

type Props = {};

export default function Reviews({}: Props) {
  return (
    <section className={cn('ptb-11 secondary-bg', styles['reviews'])}>
      <div className='main-cont'>
        <div className='title-cont'>
          <h1 className='title-lrg clr-primary tac'>The Reviews</h1>
          <h1 className='title-lrg clr-tertiary tac'>Are In</h1>
        </div>

        <div className='cont-mart'>
          <ul aria-hidden='true'>
            {reviewItems.map(({ id, src, name, review }) => (
              <li key={id}>
                <Review key={id} src={src} name={name} review={review} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
