let formData = {
  email: '',
  message: '',
};

const localStorageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

document.addEventListener('DOMContentLoaded', () => {
  const tempData = localStorage.getItem(localStorageKey);
  if (tempData) {
    formData = JSON.parse(tempData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
});

form.addEventListener('input', evnt => {
  const { name, value } = evnt.target;
  formData[name] = value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', evntS => {
  evntS.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Please fill all fields!');
    return;
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);

  formData = {
    email: '',
    message: '',
  };

  form.reset();
});
