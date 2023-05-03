import Image from 'next/image';
import cn from 'classnames';
import { nutritionItems } from '@/data/nutritionItems';
import styles from '@/styles/containers/Nutrition.module.scss';
type Props = {};

export default function Nutrition({}: Props) {
  return (
    <section className={cn('bg-primary', styles['nutrition'])}>
      <div className="ptb-11">
        <div className="grid-inner">
          <div className={styles['title']}>
            <h1 className="tac clr-black title-lrg">
              {`IT’S`} ALL GOOD BABY BABY
              <span className={styles['exclamation']}>
                <Image
                  src={'/img/exclamation.svg'}
                  alt="exclamation-point"
                  fill
                  sizes="(max-width: 768px) 100vw)"
                  priority
                />
              </span>
            </h1>
          </div>

          <div className={styles['details']}>
            {nutritionItems.map(({ id, fact, icon }) => {
              return (
                <div className={styles[`arr-${id}`]} key={id}>
                  <div className={styles['arr']}>
                    <Image
                      src={`/img/arr-${id}.svg`}
                      alt="arrow"
                      fill
                      sizes="(max-width: 768px) 100vw)"
                      priority
                    />
                  </div>
                  <div className={styles['fact']}>
                    <span>{fact}</span>

                    <div className={styles['icon']}>
                      <Image
                        src={`/img/${icon}.svg`}
                        alt={icon}
                        fill
                        sizes="(max-width: 768px) 100vw)"
                        priority
                      />
                    </div>
                  </div>
                </div>
              );
            })}

            <div className={styles['slice']}>
              <Image
                src={'/img/slice.webp'}
                alt="pizza slice"
                fill
                sizes="(max-width: 768px) 100vw)"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
