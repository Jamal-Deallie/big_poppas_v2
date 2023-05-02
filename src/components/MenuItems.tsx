import { ReactNode, memo } from 'react';
import Card from '@/components/Card';
import GridLayout from '@/components/GridLayout';

type Props = {
  category: string;
};

function MenuItemsComponent({ category }: Props) {
  let PizzaItems = Array(11).fill({
    id: 1,
    src: 'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683000432/big_poppas/pizza-sample_k99fkg.webp',
    name: 'Pizza',
  });

  let DrinkItems = Array(10).fill({
    id: 1,
    src: 'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683002233/big_poppas/drink-sample_dpbox5.jpg',
    name: 'Drink',
  });

  let DessertItems = Array(10).fill({
    id: 1,
    src: 'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683002233/big_poppas/dessert-sample_ogsu9p.jpg',
    name: 'Dessert',
  });

  function menuList(): ReactNode {
    switch (category) {
      case (category = 'pizzas'): {
        return (
          <GridLayout>
            {PizzaItems.map((item, index) => {
              console.log(item);
              return <Card key={index} name={item.name} src={item.src} />;
            })}
          </GridLayout>
        );
        break;
      }
      case (category = 'drinks'): {
        return (
          <GridLayout>
            {DrinkItems.map((item, index) => {
              console.log(item);
              return <Card key={index} name={item.name} src={item.src} />;
            })}
          </GridLayout>
        );
        break;
      }
      case (category = 'desserts'): {
        return (
          <GridLayout>
            {DessertItems.map((item, index) => {
              console.log(item);
              return <Card key={index} name={item.name} src={item.src} />;
            })}
          </GridLayout>
        );
        break;
      }
    }
  }
  return <div>{menuList()}</div>;
}

export const MenuItems = memo(MenuItemsComponent);
