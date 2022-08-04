import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(formInput, 500));
const formData = {};
lastMessage();
//
function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function formInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function lastMessage() {
  if (localStorage.getItem('feedback-form-state')) {
    const { email, message } = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
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
