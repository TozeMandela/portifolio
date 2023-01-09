const articleF = document.querySelectorAll('.front article, .back article');
let listImg = ['img1','img2','img3','img4','img5','img6', 'img7'];
let idImgSelected;
const objProjectF = [
    { 
        img: 'img1',
        video: '', 
        desc: "<h1>Portfólio</h1><br/><br/>Este projecto é um projecto que mostra um pouco e de forma ilustrada(alguns projectos práticos que tenho em meu repositório github) tudo quanto posso fazer e tudo quanto tenho feito com o conhecimento que tenho em programação.<br/><br/>Ferramentas usadas para a conclusão do mesmo:<br/> <ul><li>HTML</li><li>CSS</li><li>JAVASCRIPT</li></ul><br/> sendo que cada projecto é um projecto, ao termino do mesmo notei que pude por muito dos conhecimentos adquiridos durante está longa trilha de aprendisado de ferramentas de TI."
        , 
        linkP: '', 
        linked: '', 
        github: 'https://github.com/TozeMandela/portifolio' 
    },
    { 
        img: 'img2',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/inqWaho-DkE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', 
        desc: "<h1>Clone Spotify</h1><br/><br/>Este projecto é um projecto que muito amei fazer pois na época estava a aprender a trabalhar com o bootstrap e responsividade. a ideia do projecto como vêem era de clonar uma das versões do site do Spotfy...<br/><br/>Ferramentas usadas para a conclusão do mesmo:<br/> <ul><li>HTML</li><li>CSS</li><li>BOOTSTRAP</li></ul><br/> Ao termino do mesmo aprendi não só a usar o bootstrap e lidar com responsividade como melhorei o conhecimento que tinha sobre o display flex."
        , 
        linkP: 'https://spotify-clone-mandelajr.netlify.app/', 
        linked: 'https://www.linkedin.com/posts/toz%C3%A9-mandela-4a44b521b_clone-do-spotify-feito-com-sucesso-esse-activity-6962516440776093697-HKwK?utm_source=share&utm_medium=member_desktop', 
        github: 'https://github.com/TozeMandela/projeto-inicial-spotify' 
    },
    { 
        img: 'img3',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qJUiv3RuMCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', 
        desc: "<h1>Finans</h1><br/><br/>Este projecto é o projecto que me foi dado para fazer quando pela primeira vez começei a aperfeiçoar conceitos de grid, flexbox e alguns comportamentos relacionados a diferentes tipos de tela..., é um projecto massa para treinar esses conceitos se tiver começando a estudar tecnologias como Html e css, eu graças a Deus muito aprende e hoje sou o que sou graças a treinamentos com projectoscompletos iguais a estes.<br/><br/>Ferramentas usadas para a conclusão do mesmo:<br/> <ul><li>HTML</li><li>CSS</li><li>BOOTSTRAP</li><li>JAVASCRIPT</li></ul><br/>."
        , 
        linkP: 'https://finans-mandela-jr.netlify.app/', 
        linked: 'https://www.linkedin.com/posts/toz%C3%A9-mandela-4a44b521b_clone-do-spotify-feito-com-sucesso-esse-activity-6962516440776093697-HKwK?utm_source=share&utm_medium=member_desktop', 
        github: 'https://github.com/TozeMandela' 
    },
    { 
        img: 'img4',
        video: '<img src="/frontend/assets/img/Nova-pasta/img4.png"/>', 
        desc: "<h1>Nossos Serviços</h1><br/><br/>Este projecto foi um projecto dado como desafio no projecto code web da unitel, fora ao site em si, o real desafio estava em pensar fora da caisa e usar peseudo-elementos no css para fazer os efeitos amarelados que se encontram em muitas box existentes no mesmo como podem ver...<br/><br/>Ferramentas usadas para a conclusão do mesmo:<br/> <ul><li>HTML</li><li>CSS</li></ul><br/>"
        , 
        linkP: 'https://tpc-unitel-code-web.netlify.app/', 
        linked: 'https://www.linkedin.com/posts/toz%C3%A9-mandela-4a44b521b_boa-tarde-httpslnkdind7x6unhi-activity-7005542140466335744-uwCR?utm_source=share&utm_medium=member_desktop', 
        github: 'https://github.com/TozeMandela' 
    },
    { 
        img: 'img5',
        video: '<img src="/frontend/assets/img/Nova-pasta/img5.png"/>', 
        desc: "<h1>registro de despesas</h1><br/><br/>Este projecto é um projecto que criei quando estava a aprender a criar cruds salvando dados do localStorage ou sessionStorage<br/>Ferramentas usadas para a conclusão do mesmo:<br/> <ul><li>HTML</li><li>CSS</li><li>BOOTSTRAP</li><li>Tamplate dado para focar só nas funcionalidades</li></ul><br/>Neste projecto o que mais amei foi colocar os filtros para diversas formas de pesquisas dos dados salvos na memoria, mais tarde evoluí ele ou o tranformei usando o node e fazendo ela salvar os dados em uma base de dados...!", 
        linkP: 'https://registros-despesas-mandelajr.netlify.app/src/consulta.html', 
        linked: 'https://www.linkedin.com/posts/toz%C3%A9-mandela-4a44b521b_api-activity-6966490204547264512-VesF?utm_source=share&utm_medium=member_desktop', 
        github: 'https://github.com/TozeMandela/app-despesas' 
    },
    { 
        img: 'img6',
        video: '<img src="/front"', 
        desc: "<h1>Calculadora</h1><br/><br/>Este projecto é um projecto que realizei como desafio as minhas capacidades/conhecimentos em javaScript sendo que de verdade o que muito me motivou a realizar este projecto é a função eval está que resolve calculos passados como estringo"
        , 
        linkP: 'https://calculadora-by-mandelajr.netlify.app/', 
        linked: 'https://www.linkedin.com/posts/toz%C3%A9-mandela-4a44b521b_mandelaabrjr-activity-6946163533449457664-Lmsd?utm_source=share&utm_medium=member_desktop', 
        github: 'https://github.com/TozeMandela/curso-javascript-projeto-calculadora-win' 
    },
    { 
        img: 'img7',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/28-VvxNg0Yg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', 
        desc: "<h1>API Banco Meu Kumbuuu</h1><br/>Este é um dos Projectos em que coloco em prática os conhecimentos de back-end projecto super legal/massa e bastante desafiador também..., a ideia da coisa é ou era de simular ou criar rotas que direcionavam as requesições a funcionalidades de serviços existentes em um banco real tal como podem ver no projecto, salvar os dados em uma base de dados e consumir ela posteriormente com conhecimentos que vou adquirindo enquanto estudo react-js.<br/>Ferramentas utilizadas:<br/><ul><li>node</li><li>mysql</li><li>sequelize/..-cli</li></ul><br/>usou-se varios outros modulos como sucrize para, jsonwebtoken, bcryptjs... ."
        , 
        linkP: 'https://github.com/TozeMandela/banco-meu-kumbo-api', 
        linked: 'https://www.linkedin.com/posts/toz%C3%A9-mandela-4a44b521b_api-banco-meu-kumbuuu-feito-com-sucesso-activity-7016897178673524736-RuYg?utm_source=share&utm_medium=member_desktop', 
        github: 'https://github.com/TozeMandela/banco-meu-kumbo-api' 
    },
]
function escolheImgApresentar(arrayF){
    let aux = [];
    function alea(){
        let ale = (Math.floor((Math.random() * (arrayF.length - 0) + 0)));
        if (aux.indexOf(ale) !== -1) return alea();
        return ale;
    }

    while (aux.length < 6)
    aux.push(alea());

    if (aux.length === 6)
    return aux;
}
function creteImg(imagem) {
    let img = document.createElement('img');
    img.dataset.name = imagem;
    img.src = `../assets/img/Nova-pasta/${imagem}.png`;   
    return img;
}
let idInterval;
function interv(){ 
    idInterval = setInterval(() => {
    idImgSelected = escolheImgApresentar(listImg);
    articleF.forEach((article, index) => {
        if (article.querySelector('figure').querySelector('img')) article.querySelector('figure').removeChild(article.querySelector('figure').querySelector('img'));
        
        article.querySelector('figure').appendChild(creteImg(listImg[idImgSelected[index]]));
        
    });

}, 10000);
}

interv();

articleF.forEach(element => {
    element.addEventListener('click', ()=> {
        clearInterval(idInterval);
        const imgC = element.querySelector('figure img');
        objProjectF.forEach(async (obj, index) => {
            if(obj.img === imgC.dataset.name){ 
            
                let v = await objProjectF[index];
                if (v.video){
                    document.querySelector('.vd section').innerHTML = v.video;
                }
                if (!v.video){
                    document.querySelector('.vd section').innerHTML = `<img src="/frontend/assets/img/Nova-pasta/${v.img}.png" />`;
                }
                document.querySelector('.vd aside').innerHTML = v.desc;
                document.querySelector('.controller .linke').href = v.linked;
                document.querySelector('.controller .repo').href = v.github;
                document.querySelector('.controller .ver').href = v.linkP;
                modal.style.display = "block";
                if (modal.style.display === 'block') {
                    const a = document.createElement('a');
                    a.href = '#modal';
                    a.classList.add('click')
                    document.body.appendChild(a);
                    document.querySelector('.click').click();
                    overflowHtmlBody('hidden');
                
                }
            }
        });
    })
});

document.querySelector('.remove').addEventListener('click', () => {
    document.querySelector('#modal').style.display = 'none';
    overflowHtmlBody('auto');
    interv();
 });


