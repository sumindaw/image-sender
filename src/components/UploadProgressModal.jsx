import React from 'react';

import Backdrop from 'components/Backdrop';
import LinearLoader from 'components/LinearLoader';

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
        <LinearLoader />
      </div>
    </Backdrop>
  );
}
