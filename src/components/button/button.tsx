import classNames from 'classnames';
import React from 'react';
import './styles/button.scss';

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

export type ButtonTypeUnion = 'primary' | 'danger' | 'default' | 'link';
export type ButtonSizeUnion = 'lg' | 'sm';
interface IBaseButtonProps {
  type?: ButtonTypeUnion;
  size?: ButtonSizeUnion;
  disabled?: boolean;
  className?: string;
  href?: string;
  children?: React.ReactNode;
}

const Button: React.FC<IBaseButtonProps> = (props) => {
  const { type, size, disabled, className, children, href } = props;

  const classes = classNames(
    'btn',
    { 'btn-default': !type },
    {
      [`btn-${type}`]: type,
      [`btn-${size}`]: size,
      disabled: type === ButtonType.Link && disabled,
    },
  );
  if (type === ButtonType.Link) {
    if (!href) {
      console.warn('[warn]the link type button should be provide "href" props');
    }
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  } else {
    return (
      <button type="button" className={classes} disabled={disabled}>
        {children}
      </button>
    );
  }
};

export default Button;
