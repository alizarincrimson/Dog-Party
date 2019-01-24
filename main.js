const dogName = document.querySelector('#dog-name');
const textField = document.getElementById('submit');
const submitBtn = document.getElementById('submit-button');

submitBtn.addEventListener('click', changeName);

function changeName(e) {
  e.preventDefault();
  dogName.innerText = textField.value;
  textField.value = '';
};
