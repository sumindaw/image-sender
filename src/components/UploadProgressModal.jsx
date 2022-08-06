import React from 'react';

import Backdrop from 'components/Backdrop';
import LinerLoader from 'components/LinerLoader';

export default function UploadProgressModal({ visible }) {
  if (!visible) {
    return '';
  }

  return (
    <Backdrop>
      <div className="upload-progress-modal">
        <div className="upload-progress-modal__title">
          Uploading Form
        </div>
        <LinerLoader />
      </div>
    </Backdrop>
  );
}
