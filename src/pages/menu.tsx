import { useState } from 'react';
import SEO from '@/components/SEO';
import { SEOResults as Results } from '@/types/typings';
import { MenuItems } from '@/components/MenuItems';
import styles from '@/styles/pages/Menu.module.scss';
import cn from 'classnames';

type MenuProps = {
  id: number;
  category: string;
};

type PageProps = { seo?: Results };

export default function Menu({ seo }: PageProps) {
  const categories: ReadonlyArray<MenuProps> = [
    { id: 1, category: 'pizzas' },
    { id: 2, category: 'drinks' },
    { id: 3, category: 'desserts' },
  ];

  const [selectedCat, setSelectedCat] = useState(categories[0] as MenuProps);

  return (
    <>
          <SEO {...seo} />
      <section className={cn(styles['menu'], 'ptb-11')}>
        <div className='main-cont'>
          <div className='title'>
            <h1 className='title-lrg mb-6'>Ready To Pie?</h1>
          </div>

          <div className={styles['options']}>
            {categories.map(({ id, category }) => {
              return (
                <button
                  key={id}
                  className={cn(
                    selectedCat.id === id ? styles['active'] : null,
                    styles['btn']
                  )}
                  onClick={() => setSelectedCat({ id, category })}>
                  {category}
                </button>
              );
            })}
          </div>

          <div className={styles['menu-items']}>
            <MenuItems category={selectedCat.category} />
          </div>
        </div>
      </section>
    </>
  );
}



export async function getStaticProps() {
  return {
    props: {
      id: 'about'
    }
  };
}
