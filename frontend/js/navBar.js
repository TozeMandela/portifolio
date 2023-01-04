const articleF = document.querySelectorAll('.front article');
let listImg = ['img1','img2','img3','img4','img5','img6'];
let idImgSelected;
const objProjectF = [
    { img: 'img1', video: '', desc: '', linkP: '', linked: '', github: '' },
    { img: 'img2', video: '', desc: '', linkP: '', linked: '', github: '' },
    { img: 'img3', video: '', desc: '', linkP: '', linked: '', github: '' },
    { img: 'img4', video: '', desc: '', linkP: '', linked: '', github: '' },
    { img: 'img5', video: '', desc: '', linkP: '', linked: '', github: '' },
    { img: 'img6', video: '', desc: '', linkP: '', linked: '', github: '' },
]
function escolheImgApresentar(arrayF){
    let aux = [];
    function alea(){
        let ale = (Math.floor((Math.random() * (arrayF.length - 1) + 1)));
        if (aux.indexOf(ale) !== -1) return alea();
        return ale;
    }

    while (aux.length < 3)
    aux.push(alea());

    if (aux.length === 3)
    return aux;
}
function creteImg(imagem) {
    let img = document.createElement('img');
    img.src = `/frontend/assets/img/Nova-pasta/${imagem}.png`;   
    return img;
}

setInterval(() => {
    idImgSelected = escolheImgApresentar(listImg);
    
    articleF.forEach((article, index) => {
        if (article.querySelector('figure').querySelector('img')) article.querySelector('figure').removeChild(article.querySelector('figure').querySelector('img'));
        
        article.querySelector('figure').appendChild(creteImg(listImg[idImgSelected[index]]));
        
    });

}, 4000);



