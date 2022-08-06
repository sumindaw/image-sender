import React, { useState } from 'react';
import cn from 'classnames';

import { isEmpty } from 'components/helper';

export default function TextArea({
  id,
  label,
  rows,
  value,
  helpText,
  error,
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
        <textarea
          id={id}
          className="text-input__input"
          rows={rows}
          onChange={(e) => onChange(e.target.value)}
        >
          {value}
        </textarea>
      </div>
      <p
        className={cn('text-input__help-text', { 'text-input__help-text--error': error })}
      >
        {helpText}
      </p>
    </div>
  );
}
