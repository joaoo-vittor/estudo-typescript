import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  hideErrorMessages(form);

  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);

  if (shouldSendForm(form)) console.log('Formulário Enviado');
});

const shouldSendForm = (form: HTMLFormElement): boolean => {
  if (form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).length > 0) return false;
  return true;
};

const checkEqualPasswords = (
  password1: HTMLInputElement,
  password2: HTMLInputElement,
): void => {
  if (password1.value !== password2.value) {
    showErrorMessage(password2, 'A senha está diferente da senha de cima.');
  }
};

const checkEmail = (input: HTMLInputElement): void => {
  if (!isEmail(input.value)) {
    showErrorMessage(input, 'Email inválido!');
  }
};

const checkForEmptyFields = (...inputs: HTMLInputElement[]): void => {
  inputs.forEach((input) => {
    if (!input.value) {
      showErrorMessage(input, 'Campo não pode ficar vazio!');
    }
  });
};

const hideErrorMessages = (form: HTMLFormElement): void => {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
};

const showErrorMessage = (input: HTMLInputElement, msg: string): void => {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerHTML = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
};
