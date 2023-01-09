let menuHamburguer = document.querySelector('.cabecalho .menuHambur');
let li = document.querySelectorAll('.cabecalho .menu ul li');

menuHamburguer.addEventListener('click', (evt) => {
    let desaparecer = document.querySelector('.desaparecer');
    if (desaparecer.style.display === 'none') {
        document.querySelector('.tr1').classList.remove('childOne');
        document.querySelector('.tr2').classList.remove('childTwo');
        document.querySelector('.cabecalho').classList.remove('heigth');
        desaparecer.style.display = 'block';


    } else if (desaparecer.style.display !== 'none') {
        document.querySelector('.cabecalho').classList.add('heigth');
        desaparecer.style.display = 'none';
        document.querySelector('.tr1').classList.add('childOne');
        document.querySelector('.tr2').classList.add('childTwo');
    }
});

li.forEach(el => {
    el.addEventListener('click', () => {
        document.querySelector('.cabecalho').classList.remove('heigth');
        document.querySelector('.desaparecer').style.display = 'block';
        document.querySelector('.tr1').classList.remove('childOne');
        document.querySelector('.tr2').classList.remove('childTwo');
    });
});