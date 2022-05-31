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

function mark(event) {
  const target = event.target;

  if (target.classList.contains('completed')) {
    target.classList.remove('completed');
  } else {
    target.classList.add('completed');
  }
}

function completeTask() { // por algum motivo quando existem mais de 3 itens na lista os numeros impares não funcionam direito.
  const wayToLi = document.querySelectorAll('li');

  for (let itens of wayToLi) {
    itens.addEventListener('dblclick', mark);
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
    }
  }

  wayToButton.addEventListener('click', addNewTask)
}

createNewTask();
