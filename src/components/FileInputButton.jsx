import React from 'react';

import AddIcon from 'assests/icons/add.svg';

export default function FileInputButton({ onAttach }) {
  return (
    <label htmlFor="attachment">
      <div
        role="button"
        className="button"
      >
        <AddIcon />
        Add Image
      </div>
      <input
        id="attachment"
        name="attachment"
        accept="image/*"
        type="file"
        multiple={false}
        style={{ display: 'none' }}
        onChange={onAttach}
      />
    </label>
  );
}
