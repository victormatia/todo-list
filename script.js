function markOffTask() {
  const wayToLi = document.querySelectorAll('li');

  for (let i = 0; i < wayToLi.length; i += 1) {
    wayToLi[i].classList.remove('itemMarked');
  }
}

function markOnTask() {
  const wayToLi = document.querySelectorAll('li');

  function mark(event) {
    markOffTask()
    event.target.classList.add('itemMarked');
  }

  for (let itens of wayToLi) {
    itens.addEventListener('click', mark);

  }
}

function createNewTask() {
  const wayToButton = document.querySelector('#criar-tarefa');
  const wayToInput = document.querySelector('#texto-tarefa');
  const wayToOl = document.querySelector('#lista-tarefas')

  function addNewTask() {
    const createNewLI = document.createElement('li');

    wayToOl.appendChild(createNewLI)
    createNewLI.innerText = wayToInput.value;
    wayToInput.value = '' // limpa o input
    markOnTask();
  }

  wayToButton.addEventListener('click', addNewTask)

}

createNewTask();



