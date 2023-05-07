import throttle from 'lodash.throttle';

const throttle = require('lodash.throttle');

const emailMessItem = document.querySelector('form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const data = {
  email: '',
  message: '',
};

const getData = () => {
  data.email = emailInput.value;
  data.message = messageInput.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};

const updateOutput = () => {
  const parsedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (parsedData) {
    emailInput.value = parsedData.email;
    messageInput.value = parsedData.message;
    data.email = parsedData.email;
    data.message = parsedData.message;
  } else {
    emailInput.value = '';
    messageInput.value = '';
  }
};

const resetData = e => {
  e.preventDefault();
  console.log(data);
  emailMessItem.reset();
  localStorage.clear();
};

updateOutput();
emailMessItem.addEventListener('input', throttle(getData, 500));
emailMessItem.addEventListener('submit', resetData);
