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
  const wayToLi = document.querySelectorAll('li');

  function deleteItem() {
    for (let i =0; i < wayToLi.length; i += 1) {
      wayToLi[i].remove();
    }
    sessionStorage.clear()
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
      saveList();
    }
  }

  wayToButton.addEventListener('click', addNewTask)
}

createNewTask();

function saveList() { // Salva toda a lista em sessionStorage
  const wayToSalvar = document.querySelector('#salvar-tarefas');
  const wayToOl = document.querySelector('#lista-tarefas');

  function save() {
    sessionStorage.setItem('task-list', wayToOl.innerHTML);
  }

  wayToSalvar.addEventListener('click', save);
}

window.onload = function returnTasks() {  // Depois de carregada a página, verfica se existem tasks salvas e, caso tenha, retorna as mesmas.
  const wayToOl = document.querySelector('#lista-tarefas');

  if (sessionStorage.getItem('LT') !== '') {
    wayToOl.innerHTML = sessionStorage.getItem('task-list');
    markOnTask();
    completeTask();
    clearTasks();
    deleteCompleted()
    saveList();
  }  
}

function addIdLi() {
  const wayToLi = document.querySelectorAll('li');
  for (let i = 0; i < wayToLi.length; i += 1) {
    wayToLi[i].setAttribute('id', i);
  }
}

const wayToUp = document.querySelector('#mover-cima');

function moveUp() {
  const wayToLiSelected = document.querySelector('.item-marked');
  const wayToLi = document.querySelectorAll('li');
  const previous = wayToLiSelected.previousSibling;

  let test = wayToLiSelected.innerHTML; // retorna o conteudo
  let test1 = previous.innerHTML;

  previous.innerHTML = test

  wayToLiSelected.innerHTML = test1;
  


}

wayToUp.addEventListener('click', moveUp)




const wayToRmSelected = document.querySelector('#remover-selecionado');

function rmSelected() {
  const wayToLiSelected = document.querySelector('.item-marked');
  wayToLiSelected.remove();
}

wayToRmSelected.addEventListener('click', rmSelected);