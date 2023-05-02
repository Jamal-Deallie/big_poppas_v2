import { useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Modal from '@/components/Modal';
import { useLenis } from '@studio-freight/react-lenis';
import ReservationForm from '@/components/ReservationForm';
import { Button } from '@/components/Button';
import styles from '@/styles/containers/Reservation.module.scss';

type Props = {
  as: 'icon' | 'button';
};

const Calendar = dynamic(() => import('@/svgs/Calendar'), {
  ssr: false,
});
export default function Reservation({ as }: Props) {
  const [toggleLogin, setToggleLogin] = useState(false);
  const lenis = useLenis((lenis: any) => lenis);

  const toggleFunction = useCallback(() => {
    setToggleLogin(toggleLogin => !toggleLogin);
  }, [setToggleLogin, toggleLogin]);

  useEffect(() => {
    if (toggleLogin) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [lenis, toggleLogin]);
  return (
    <>
      {as === 'icon' ? (
        <button className={styles['btn']} onClick={toggleFunction}>
          <Calendar />
        </button>
      ) : (
        <Button
          bgc={'secondary'}
          size={'lrg'}
          font={'heading'}
          onClick={toggleFunction}>
          Book A Table
        </Button>
      )}

      <Modal toggleFunc={toggleFunction} isOpened={toggleLogin}>
        <ReservationForm />
      </Modal>
    </>
  );
}
