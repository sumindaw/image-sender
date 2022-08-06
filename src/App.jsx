import React, { useState } from 'react';

import 'assests/styles/index.scss';

import EmailSentAlertModal from 'components/EmailSentAlertModal';
import UploadProgressModal from 'components/UploadProgressModal';
import SimpleForm from 'components/SimpleForm';

export default function App() {
  const [sentModalVisible, setSentModalVisible] = useState(false);
  const [progressModalVisible, setProgressModalVisible] = useState(false);

  const onFormSave = (data) => {
    setProgressModalVisible(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setProgressModalVisible(false);
        setSentModalVisible(true);
        resolve();
      }, 2000);
    });
  };

  return (
    <div className="app">
      <div className="app__body">
        <SimpleForm
          onSave={onFormSave}
        />
        <EmailSentAlertModal
          visible={sentModalVisible}
          onClose={() => setSentModalVisible(false)}
        />
        <UploadProgressModal visible={progressModalVisible} />
      </div>
    </div>
  );
}
