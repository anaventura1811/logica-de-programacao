// Converter minutos em horas e minutos
const btnConvert = document.querySelector('#convert');

btnConvert.addEventListener('click', (e) => {
    e.preventDefault();
    const inputMovie = document.getElementById('movie');
    const inputDuration = document.getElementById('duration');
    const movieTitle = document.getElementById('movie-title');
    const horasmin = document.getElementById('horas-min');

    const movie = inputMovie.value;
    const duration = Number(inputDuration.value);
    if (inputMovie.value === '' || inputDuration.value === '') {
        alert('Você precisa adicionar um título de filme e a duração em minutos para usar o conversor!');
    } else {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        movieTitle.textContent = movie;
        horasmin.textContent = `${hours} hora(s) e ${minutes} minuto(s)`;
    }
})

// Adicionar itens à lista de filmes

const btnAddToList = document.getElementById('add-to-list');
btnAddToList.addEventListener('click', (e) => {
    e.preventDefault();
    const newLi = document.createElement('li');
    const inMovie = document.querySelector('#movie');
    const inDuration = document.querySelector('#duration');
    const hoursMinutes = document.querySelector('#horas-min');
    if (inMovie.value === '') {
        alert('Você precisa escrever algo para adicionar à lista de filmes!');
    } else if (inMovie.value !== '' && inDuration.value === '') {
        document.getElementById('movies-list').appendChild(newLi);
        newLi.textContent = inMovie.value;
        inMovie.value = '';
    } else {
        document.getElementById('movies-list').appendChild(newLi);
        newLi.innerText = `Filme: ${inMovie.value} - Duração: ${hoursMinutes.innerText}`;
        inMovie.value = '';
        inDuration.value = '';
    }

})


// Limpar o local Storage e limpar lista inteira 

function clearLocalStorage() {
    localStorage.clear();
}

const myList = document.getElementById('movies-list');

const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', (e) => {
    e.preventDefault();
    while (myList.childElementCount > 0) {
    myList.firstElementChild.remove();
    }
    clearLocalStorage();
});

// Mudar cor de fundo de item de lista selecionado

const taskSelected = document.querySelectorAll('.selected');

function selectItem(e) {
  const bgColor = 'rgb(240, 128, 128)';
  if (e.target.style.backgroundColor !== bgColor && e.target.className !== 'selected') {
    e.target.style.backgroundColor = bgColor;
    e.target.classList.add('selected');
  } else {
    e.target.style.backgroundColor = 'inherit';
    e.target.classList.remove('selected');
  }
}
 
// Remover apenas itens selecionados

 myList.addEventListener('click', selectItem);

 const removeItemSelected = document.querySelector('#remover-selecionado');
 removeItemSelected.addEventListener('click', (e) => {
    e.preventDefault();
    const taskSelected = document.querySelector('.selected');
      if (taskSelected.className.includes('selected')) {
          myList.removeChild(taskSelected);
    }
});

// Salvar a lista no local Storage

function saveMyList() {
    localStorage.myList = myList.innerHTML;
}

const save = document.getElementById('save');

if (typeof Storage !== 'undefined' && localStorage.myList) {
    myList.innerHTML = localStorage.myList;
}


window.onload = function initialize() {
    save.addEventListener('click', saveMyList); 
};

