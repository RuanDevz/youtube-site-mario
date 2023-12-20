const menu = document.getElementById('menu');
const barra = document.getElementById('barra');
const x = document.getElementById('x');

menu.addEventListener('click', function() {
  const barraEstaVisivel = barra.style.display !== 'none';

  if (barraEstaVisivel) {
    barra.style.display = 'none';
    x.style.display = 'none';
  } else {
    barra.style.display = 'flex';
    x.style.display = 'none'; 
  }
});

menu.addEventListener('click', trocaricon)

function trocaricon(){
    if(menu.classList.contains('fa-bars')){
        menu.classList.remove('fa-bars')
        menu.classList.add('fa-x')
    } else {
        menu.classList.remove('fa-x')
        menu.classList.add('fa-bars')
    }
}
