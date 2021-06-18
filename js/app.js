document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', handleFormSubmit)

  var deleteButton = document.createElement("BUTTON");
  deleteButton.innerHTML = "Delete All";
  document.body.appendChild(deleteButton);
  deleteButton.addEventListener('click', handleDeleteClick);

})

const handleFormSubmit = function (event) {
  event.preventDefault();
  const list = document.querySelector('#reading-list');
  const newListItem = document.createElement('li');
  list.appendChild(newListItem);
  const titleInput = document.createElement('h2');
  titleInput.textContent = `${event.target.title.value}`;
  list.appendChild(titleInput);
  const authorInput = document.createElement('h3');
  authorInput.textContent = `${event.target.author.value}`;
  list.appendChild(authorInput);
  const categorySelect =
  document.createElement('h4');
  categorySelect.textContent = `${event.target.category.value}`
  list.appendChild(categorySelect);

  document.querySelector('#new-item-form').reset(); 
}

const handleDeleteClick = function () {
  const list = document.querySelector('#reading-list');
  list.innerHTML = ''
}