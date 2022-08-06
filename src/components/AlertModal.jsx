import React from 'react';

import Backdrop from 'components/Backdrop';
import ButtonWrapper from 'components/ButtonWrapper';

import CloseIcon from 'assests/icons/close.svg';

export default function AlertModal({ heading, body, onClose }) {
  return (
    <Backdrop>
      <div className="alert-modal">
        <div className="alert-modal__header-bar">
          <div className="alert-modal__header-bar__title">
            {heading}
          </div>
          <ButtonWrapper onClick={onClose}>
            <CloseIcon />
          </ButtonWrapper>
        </div>
        <div className="alert-modal__body">
          {body}
        </div>
      </div>
    </Backdrop>
  );
}
