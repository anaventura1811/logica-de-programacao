
const btnMostrar = document.querySelector('#btnMostrar');
btnMostrar.addEventListener('click', (e) => {
    const nome = document.getElementById('nome');
    const mainContent = document.querySelector('#main-content');
    const newParag = document.createElement('p');
    e.preventDefault();
    newParag.classList.add('resposta');
    mainContent.appendChild(newParag);
    newParag.textContent = `Olá, ${nome.value}! Como você está?`;
});

