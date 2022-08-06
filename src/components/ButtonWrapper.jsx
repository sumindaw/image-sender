import React from 'react';
import cn from 'classnames';

export default function ButtonWrapper({ className, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn('button-wrapper', { [className]: className })}
    >
      {children}
    </button>
  );
}
