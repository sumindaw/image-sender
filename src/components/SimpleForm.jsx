import React, { useState } from 'react';

import Button from 'components/Button';
import TextArea from 'components/TextArea';
import TextField from 'components/TextField';
import FileInputButton from 'components/FileInputButton';
import { isEmpty, validateSimpleFormField } from 'components/helper';

export default function SimpleForm({ onSave }) {
  const [textInputState, setTextInputState] = useState({
    firstName: '',
    lastName: '',
    description: '',
    email: '',
  });

  const [textInputValidation, setTextInputValidation] = useState({
    firstName: { error: false, helpText: '' },
    lastName: { error: false, helpText: '' },
    description: { error: false, helpText: '' },
    email: { error: false, helpText: '' },
  });

  const [attachedImageFiles, setAttachedImageFiles] = useState([]);

  const anyEmpty = Object.entries(textInputState).some(([, v]) => v === '');
  const anyError = Object.entries(textInputValidation).some(([, v]) => v.error);
  const disableSave = anyEmpty || anyError;

  const validateTextInput = (field, value) => {
    const { error, helpText } = validateSimpleFormField(field, value);

    if (error || textInputValidation[field].error) {
      setTextInputValidation({
        ...textInputValidation,
        [field]: { error, helpText },
      });
    }
  };

  const onTextInputChange = (field, value) => {
    setTextInputState({ ...textInputState, [field]: value });
    validateTextInput(field, value);
  };

  const onImageAttach = (e) => {
    const file = e.target.files[0];
    file.localSrc = URL.createObjectURL(file);
    setAttachedImageFiles([...attachedImageFiles, file]);
  };

  const onSaveClick = () => {
    onSave({ ...textInputState, imageFiles: attachedImageFiles });
  };

  return (
    <div className="simple-form">
      <p className="simple-form__title">Simple Form</p>
      <div className="simple-form__field-container-1">
        <TextField
          id="First Name"
          label="First Name"
          type="text"
          value={textInputState.firstName}
          helpText={textInputValidation.firstName.helpText}
          error={textInputValidation.firstName.error}
          onChange={(v) => onTextInputChange('firstName', v)}
        />
        <TextField
          id="Last Name"
          label="Last Name"
          type="text"
          value={textInputState.lastName}
          helpText={textInputValidation.lastName.helpText}
          error={textInputValidation.lastName.error}
          onChange={(v) => onTextInputChange('lastName', v)}
        />
      </div>
      <div className="simple-form__field-container-2">
        <TextArea
          id="Small Description"
          label="Small Description"
          helpText={textInputValidation.description.helpText}
          error={textInputValidation.description.error}
          rows={8}
          value={textInputState.description}
          textArea
          onChange={(v) => onTextInputChange('description', v)}
        />
      </div>
      <div className="simple-form__field-container-2">
        <TextField
          id="Email Address"
          label="Email Address"
          type="email"
          value={textInputState.email}
          helpText={textInputValidation.email.helpText}
          error={textInputValidation.email.error}
          onChange={(v) => onTextInputChange('email', v)}
        />
      </div>
      {!isEmpty(attachedImageFiles) && (
        <div className="simple-form__image-container">
          {attachedImageFiles.map((f) => (
            <img
              alt="attachment"
              key={f.name}
              src={f.localSrc}
              className="simple-form__image"
            />
          ))}
        </div>
      )}
      <div className="simple-form__button-group">
        <FileInputButton onAttach={onImageAttach} />
        <Button
          color="primary"
          disabled={disableSave}
          onClick={onSaveClick}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
