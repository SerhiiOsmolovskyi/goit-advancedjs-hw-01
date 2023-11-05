import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';

const saveFormState = () => {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  localStorage.setItem(storageKey, JSON.stringify(formData));
};

const populateFormFields = () => {
  const storedData = localStorage.getItem(storageKey);

  if (storedData) {
    const formData = JSON.parse(storedData);
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  
  console.log(formData);
  
  localStorage.removeItem(storageKey);
  emailInput.value = '';
  messageTextarea.value = '';
};

emailInput.addEventListener('input', throttle(saveFormState, 500));
messageTextarea.addEventListener('input', throttle(saveFormState, 500));
form.addEventListener('submit', handleSubmit);

populateFormFields();