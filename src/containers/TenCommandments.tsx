import styles from '@/styles/containers/TenCommandments.module.scss';
import cn from 'classnames';
import Slider from '@/components/Slider';
type Props = {};

export default function TenCommandments({}: Props) {
  return (
    <div className='bg-tertiary'>
      <div className='ptb-11'>
        <div className={styles['title']}>
          <h1 className='title-lrg tac'>
            Ten Crust 
          </h1>
          <h1 className='title-lrg tac clr-primary'>Commandments</h1>
        </div>

        <div className={cn(styles['content'])}>
          <Slider />
        </div>
      </div>
    </div>
  );
}
