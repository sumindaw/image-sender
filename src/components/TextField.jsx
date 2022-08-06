import React, { useState } from 'react';
import cn from 'classnames';

import { isEmpty } from 'components/helper';

export default function TextField({
  id,
  label,
  type,
  value,
  error,
  helpText,
  onChange,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="text-input">
      <div
        className={cn('text-input__input-container', { 'text-input__input-container--error': error })}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <label
          htmlFor={id}
          className={cn('text-input__label', {
            'text-input__label--raised': focused || !isEmpty(value),
            'text-input__label--font-error': error,
            'text-input__label--font-primary': focused && !error,
          })}
        >
          {label}
        </label>
        <input
          id={id}
          type={type}
          defaultValue={value}
          className="text-input__input"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <p
        className={cn('text-input__help-text', { 'text-input__help-text--error': error })}
      >
        {helpText}
      </p>
    </div>
  );
}
