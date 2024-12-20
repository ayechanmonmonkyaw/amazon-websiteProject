const list = [];
function handlekeydown(event){
  if(event.key === 'Enter'){
    toDo();
  }
}
function renderHtml(){
    let todoListHTML = '';
    list.forEach(function(todoObject){
      const {name, dueDate} = todoObject;
      const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
          <button class="delete-btn js-delete-button"> Delete </button>
        `;
      todoListHTML += html;
    });
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, index)=>{
      deleteButton.addEventListener('click', ()=>{
            list.splice(index, 1);
            renderHtml();
      });
    });
}

function toDo(){
  const inputElement = document.querySelector('.js-todo-input');
  const dateInputElement = document.querySelector('.js-todo-date-input');
  const dueDate = dateInputElement.value;
  const name = inputElement.value;
  list.push({
    name,
    dueDate
  });
  inputElement.value = '';
  dateInputElement.value = '';
  renderHtml();
}

