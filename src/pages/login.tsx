import { useState } from 'react';
import { Input } from '@/components/Input';
import Layout from '@/components/Layout';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/pages/Login.module.scss';

type Props = {};

export default function Login({}: Props) {
  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };
  return (
    <section className={cn(styles['login'], 'pt-11')}>
      <div className="mtb-11">
        <div className={styles['title']}>
          <h1 className="title-lrg tac">Login</h1>
          <div />
          <form className={cn(styles['form'], 'mt-11')} autoComplete="false">
            <div className={styles['form-wrap']}>
              <Input type="text" placeholder="Email" autoComplete={'none'} />
            </div>

            <div className={styles['pass-wrap']}>
              <input
                type={passwordType}
                placeholder="password"
                className={styles['pass-input']}
                autoComplete="none"
              />

              <div className={styles['icon']} onClick={togglePassword}>
                <Image
                  src={
                    'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683002654/big_poppas/eyeball_zngqh4.svg'
                  }
                  alt="toggle password"
                  fill
                  sizes={'(max-width: 768px): 100vw'}
                />
              </div>
            </div>
            <input type="button" value="Submit" className={styles['btn']} />
          </form>
          <div className={cn(styles['register'], 'clr-tertiary mt-6')}>
            <span>
              Don’t have an Account?{' '}
              <Link href="register">Create Yours Now</Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
