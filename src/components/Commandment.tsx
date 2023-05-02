import Image from 'next/image';
import styles from '@/styles/components/Commandment.module.scss';
import cn from 'classnames';

type CommandmentProps = {
  number: string;
  icon: string;
  alt: string;
  commandment: string;
};

export default function Commandment({
  number,
  icon,
  alt,
  commandment,
}: CommandmentProps) {
  return (
    <div className={styles['commandment']}>
      <div className={styles['inner']}>
        <h5>{`${number} Commandment`}</h5>
        <div className={cn(styles['icon'], 'mt-2')}>
          <Image src={icon} alt={alt} fill sizes={'(max-width: 768px) 100vw'} />
        </div>
        <p className='txt clr-tertiary mt-2'>{commandment}</p>
      </div>
    </div>
  );
}
