import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import classes from './Input.module.css';

type InputProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
  accent?: boolean;
  icon?: Icon;
};

type IconSwitcherProps = ComponentPropsWithoutRef<'div'> & {
  icon: Icon;
};

type IconProps = ComponentPropsWithoutRef<'svg'>;

type Icon = 'edit' | 'link' | 'target';

export function Input({
  icon = 'edit',
  accent = false,
  className,
  label,
  ...props
}: InputProps) {
  const classNames = cn(classes.inputText, className, {
    [classes.accent]: accent,
  });

  return (
    <label className={classNames}>
      <span className={classes.label}>{label}</span>
      <div className={classes.wrapper}>
        <input type="text" className={classes.input} {...props} />
        <IconSwitcher icon={icon} className={classes.icon} />
      </div>
    </label>
  );
}

function IconSwitcher({ icon, className }: IconSwitcherProps): JSX.Element {
  switch (icon) {
    case 'link':
      return <IconLink className={className} />;
    case 'target':
      return <IconTarget className={className} />;
    default:
      return <IconEdit className={className} />;
  }
}

function IconEdit({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
    >
      <path
        stroke="#B4B4B4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m14 12-.67.73c-.35.39-.83.6-1.33.6-.5 0-.98-.21-1.33-.6-.36-.39-.84-.6-1.34-.6-.5 0-.98.21-1.33.6m-6 .6h1.12c.32 0 .49 0 .64-.03.14-.04.27-.09.38-.16.14-.09.25-.2.48-.43L13 4.33a1.41 1.41 0 1 0-2-2l-8.38 8.38c-.23.23-.34.34-.42.48-.08.12-.13.25-.16.38-.04.16-.04.32-.04.65v1.11Z"
      />
    </svg>
  );
}

function IconLink({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
    >
      <path
        stroke="#B4B4B4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m8.47 12.24-.94.95A3.33 3.33 0 0 1 2.8 8.47l.95-.94m8.48.94.95-.94A3.33 3.33 0 0 0 8.47 2.8l-.94.95m-1.86 6.57 4.66-4.66"
      />
    </svg>
  );
}

function IconTarget({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
    >
      <path
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.67 8A6.67 6.67 0 0 1 8 14.67M14.67 8A6.67 6.67 0 0 0 8 1.33M14.67 8H12m-4 6.67A6.67 6.67 0 0 1 1.33 8M8 14.67V12M1.33 8A6.67 6.67 0 0 1 8 1.33M1.33 8H4m4-6.67V4"
      />
    </svg>
  );
}
