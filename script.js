function markOffTask() {
  const wayToLi = document.querySelectorAll('li');

  for (let i = 0; i < wayToLi.length; i += 1) {
    wayToLi[i].classList.remove('item-marked');
  }
}

function markOnTask() {
  const wayToLi = document.querySelectorAll('li');

  function mark(event) {
    markOffTask()
    event.target.classList.add('item-marked');
  }

  for (let itens of wayToLi) {
    itens.addEventListener('click', mark);

  }
}

function markComplete(event) {
  const target = event.target;

  if (target.classList.contains('completed')) {
    target.classList.remove('completed');
  } else {
    target.classList.add('completed');
  }
}

function completeTask() { 
  const wayToLi = document.querySelectorAll('li');

  for (let itens of wayToLi) {
    itens.addEventListener('dblclick', markComplete);
  }
}

function clearTasks () {
  const wayToApagaTudo = document.querySelector('#apaga-tudo')
  const wayToOl = document.querySelector('#lista-tarefas');
  const wayToLi = document.querySelectorAll('li');

  function deleteItem() {
    for (let i =0; i < wayToLi.length; i += 1) {
      wayToLi[i].remove();
    }
  }

  wayToApagaTudo.addEventListener('click', deleteItem);

}

function deleteCompleted() {
  const wayToRemoverFinalizadas = document.getElementById('remover-finalizados');
  const wayToCompleteds = document.getElementsByTagName('li');
  
  function deleteTask() {
    for (let li of wayToCompleteds) {
      const style  = getComputedStyle(li).textDecoration // LEMBRE-SE! Se você usar o getComputedStyle() o primeiro parâmetro tem que ser do tipo 'Element'. Caso seja do tipo 'ElementS' ele irá dar erro!! 
      
      if (style === 'line-through solid rgb(0, 0, 0)') {
        li.remove();
      }
    }
  }

  wayToRemoverFinalizadas.addEventListener('click', deleteTask);
}

function createNewTask() {
  const wayToButton = document.querySelector('#criar-tarefa');
  const wayToInput = document.querySelector('#texto-tarefa');
  const wayToOl = document.querySelector('#lista-tarefas');

  function addNewTask() {
    if (wayToInput.value == '') {
      alert('Adicione um título para criar uma nova tarefa')
      wayToInput.value = ''
    } else {
      const createNewLI = document.createElement('li');
      wayToOl.appendChild(createNewLI)
      createNewLI.innerText = wayToInput.value;
      wayToInput.value = '' // limpa o input
      markOnTask();
      completeTask();
      clearTasks();
      deleteCompleted()
    }
  }

  wayToButton.addEventListener('click', addNewTask)
}

createNewTask();
