export const isEmpty = (arg) => arg === undefined
    || arg === null
    || arg === ''
    || (typeof arg === 'object' && Object.keys(arg).length === 0);

export const isValidEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const EMPTY_FIELD_ERROR_MESSAGES = {
  firstName: 'First Name is required',
  lastName: 'Last Name is required',
  description: 'Description is required',
  email: 'Email is required',
};

const INVALID_EMAIL_ERROR_MESSAGE = 'Please enter a valid email';

export const validateSimpleFormField = (field, value) => {
  let error = false;
  let helpText = '';

  switch (field) {
    case 'firstName':
    case 'lastName':
    case 'description': {
      if (isEmpty(value)) {
        error = true;
        helpText = EMPTY_FIELD_ERROR_MESSAGES[field];
      }
      break;
    }
    case 'email': {
      if (isEmpty(value)) {
        error = true;
        helpText = EMPTY_FIELD_ERROR_MESSAGES[field];
      } else if (!isValidEmail(value)) {
        error = true;
        helpText = INVALID_EMAIL_ERROR_MESSAGE;
      }
      break;
    }
    default:
      break;
  }

  return { error, helpText };
};
