export const isEmpty = (arg) => arg === undefined
    || arg === null
    || arg === ''
    || (typeof arg === 'object' && Object.keys(arg).length === 0);

export const isValidEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const validateSimpleFormField = (field, value) => {
  let error = false;
  let helpText = '';

  switch (field) {
    case 'firstName': {
      if (isEmpty(value)) {
        error = true;
        helpText = 'First Name is required';
      }
      break;
    }
    case 'email': {
      if (isEmpty(value)) {
        error = true;
        helpText = 'Email is required';
      } else if (!isValidEmail(value)) {
        error = true;
        helpText = 'Please enter a valid email';
      }
      break;
    }
    default:
      break;
  }

  return { error, helpText };
};
