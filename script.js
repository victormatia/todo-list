function createNewTask() {
  const wayToButton = document.querySelector('#criar-tarefa');
  const wayToInput = document.querySelector('#texto-tarefa');
  const wayToOl = document.querySelector('#lista-tarefas')

  function addNewTask() {
    console.log('clicado')
    const createNewLI = document.createElement('li');

    wayToOl.appendChild(createNewLI)
    createNewLI.innerText = wayToInput.value;
    wayToInput.value = '' // limpa o input
  }


  wayToButton.addEventListener('click', addNewTask)
}

createNewTask();
