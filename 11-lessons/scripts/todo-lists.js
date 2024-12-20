const list = [];
function handlekeydown(event){
  if(event.key === 'Enter'){
    toDo();
  }
}
function renderHtml(){
    let todoListHTML = '';
    for(let i = 0; i < list.length; i++){
      const todoObject = list[i];
      // const name = todoObject.name;
      // const dueDate = todoObject.dueDate;
      const {name, dueDate} = todoObject;
      const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
          <button onclick="
            list.splice(${i}, 1);
            renderHtml();
          " class="delete-btn"> Delete </button>
        `;
      todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
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

