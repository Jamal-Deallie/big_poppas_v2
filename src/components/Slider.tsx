import { useBlazeSlider } from 'react-blaze-slider';
import dynamic from 'next/dynamic';
import Commandment from '@/components/Commandment';
import Image from 'next/image';
import styles from '@/styles/components/Slider.module.scss';
import { commandmentItems } from '@/data/commandmentsItems';

type Props = {};

export default function Slider({}: Props) {
  const ref = useBlazeSlider({
    all: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
    '(max-width: 800px)': {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  });

  return (
    <div className='blaze-slider' ref={ref}>
      <div className='controls'>
        <button className='blaze-prev'>
          <div className={styles['arr-l']}>
            <Image
              src={'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683002654/big_poppas/arrow-slide_bhfhz4.svg'}
              alt='arrow-r'
              fill
              sizes={'(max-width: 768px) 100vw'}
              priority
            />
          </div>
        </button>

        <button className='blaze-next'>
          <div className={styles['arr-r']}>
            <Image
              src={'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683002654/big_poppas/arrow-slide_bhfhz4.svg'}
              alt='arrow-r'
              fill
              sizes={'(max-width: 768px) 100vw'}
              priority
            />
          </div>
        </button>
      </div>

      <div className='blaze-container mt-xs'>
        <div className='blaze-track-container'>
          <div className='blaze-track'>
            {commandmentItems.map(({ id, number, icon, alt, commandment }) => (
              <Commandment
                key={id}
                number={number}
                icon={icon}
                alt={alt}
                commandment={commandment}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
