import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(formInput, 500));
const formData = {};
const FEEDBACK_FORM_STATE = 'feedback-form-state';
const localStorageData = localStorage.getItem(FEEDBACK_FORM_STATE);
setLocalStorageData();
//
function onFormSubmit(evt) {
  evt.preventDefault();
  if (!refs.input.value || !refs.textarea.value) {
    return alert('Please fill the form');
  }
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_STATE);
}

function formInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));
}

function setLocalStorageData() {
  if (localStorageData) {
    const { email, message } = JSON.parse(localStorageData);
    if (message) {
      formData.message = message;
      refs.textarea.value = formData.message;
    }
    if (email) {
      formData.email = email;
      refs.input.value = formData.email;
    }
  }
}
