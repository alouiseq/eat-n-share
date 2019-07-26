const validateLogin = (controlKey, value, validationRules, checkValue) => {
  let isValid = true;

  for(let rule in validationRules) {
    switch (controlKey) {
      case 'email':
        isValid = isValid && emailValidator(value, validationRules[rule]);
        break;
      case 'password':
        isValid = isValid && passwordValidator(value, validationRules[rule]);
        break;
      case 'confirmPassword':
        isValid = isValid && confirmPasswordValidator(value, checkValue);
        break;
      default:
        isValid = true;
    }
  }
  return isValid;
}

const emailValidator = (email, isEmail) => {
  if (isEmail) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase())
  }
  // default when there's no rule
  return true;
}

const passwordValidator = (val, minLength) => val.length >= minLength;

const confirmPasswordValidator = (val, checkVal) => val === checkVal;

export default validateLogin;