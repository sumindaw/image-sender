import React from 'react';
import cn from 'classnames';

export default function Button({
  children,
  color,
  disabled,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn('button', {
        [`button--${color}`]: color,
        'button--disabled': disabled,
      })}
    >
      {children}
    </button>
  );
}
