import {
  ButtonHTMLAttributes,
  ReactNode,
  AnchorHTMLAttributes,
  memo,
} from 'react';
import Link, { LinkProps } from 'next/link';
import cn from 'classnames';
import styles from '@/styles/components/Button.module.scss';

type BaseProps = {
  size?: 'sm' | 'md' | 'lrg' | 'full';
  font?: 'heading' | ' body';
  isLoading?: boolean;
  disabled?: boolean;
  classes?: string;
  children: ReactNode;
  icon?: boolean;
  src?: string;
  bgc?: string;
  fc?: string;
  onClick?: () => void;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    component?: 'button';
  };

type ButtonAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    component: 'link';
  };

type ButtonAsExternal = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    component: 'externalLink';
  };

type Props = ButtonAsButton | ButtonAsExternal | ButtonAsLink;

const ButtonComponent = (props: Props) => {
  const { component, bgc, fc, size, font, children, disabled } = props;

  const classNames = cn(
    styles['base'],
    styles[`font-${font}`],
    styles[`bg-${bgc}`],
    styles[`color-${fc}`],
    styles[`${size}`]
  );

  if (component === 'link') {
    const { ...rest } = props;
    return (
      <Link {...rest} className={classNames}>
        {children}
      </Link>
    );
  } else if (component === 'externalLink') {
    const { ...rest } = props;
    return (
      <a
        className={classNames}
        target='_blank'
        rel='noopener noreferrer'
        {...rest}>
        {children}
      </a>
    );
  } else {
    const { ...rest } = props;
    return (
      <button className={classNames} disabled={disabled} {...rest}>
        {children}
      </button>
    );
  }
};

export const Button = memo(ButtonComponent);
