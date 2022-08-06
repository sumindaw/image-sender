import React from 'react';

import AlertModal from 'components/AlertModal';

import OutgoingMailIcon from 'assests/icons/outgoing-mail.svg';

export default function EmailSentAlertModal({ visible, onClose }) {
  if (!visible) {
    return '';
  }

  return (
    <AlertModal
      heading={(
        <>
          <OutgoingMailIcon />
          Email Sent
        </>
      )}
      body={(
        <>
          &#127881;&nbsp;
          Email is successfully sent, please check your inbox for more details.
        </>
      )}
      onClose={onClose}
    />
  );
}
