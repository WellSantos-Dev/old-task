export default function initCriaTarefa() {
  
}

const botaoCriar = document.querySelector('.criar-tarefa');
const modal = document.querySelector('.modal-tarefa');
const inputTask = document.querySelector('.task')
const inputTaskObs = document.querySelector('.task-obs')
const sendInput = document.querySelector('.send-info')
const container = document.querySelector('.area-tasks')




botaoCriar.addEventListener('click', (e) => {
  modal.classList.add('ativo')
})


function criarBox(valueTask, valueObs) {
  let box = document.createElement('div')
  box.classList.add('task-box')
  box.classList.add('ativo')
  container.appendChild(box)
  
  box.innerHTML += `<button class="apagar-tarefa">x</button>`
  box.innerHTML += `<h1>${valueTask}</h1>`
  box.innerHTML += `<p>${valueObs}</p>`
  
  modal.classList.remove('ativo')
}

document.addEventListener('click', (e) => {
  const el = e.target;

  if(el.classList.contains('apagar-tarefa')) {
    el.parentElement.remove()
  }
})

document.addEventListener('click', (e) => {
  const el = e.target;
  if(el.classList.contains('modal-tarefa')) {
    modal.classList.remove('ativo')
  }
})


sendInput.addEventListener('click', (e) => {
  e.preventDefault()
  criarBox(inputTask.value, inputTaskObs.value)
  inputTask.value = ''
  inputTaskObs.value = ''
})