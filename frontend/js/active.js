    const active = document.querySelectorAll('.cabecalho .menu ul li');
    const sectione = document.querySelectorAll(".sectione");


    active.forEach((li)=>{
        li.addEventListener('click', (e)=>{
            removeActive();
            let a = li.querySelector('a');
            a.classList.add('active');
        });
    })
    function removeActive(){
        active.forEach((li)=>{
            let a = li.querySelector('a');
            a.classList.remove('active');
        })
    }


    const funcObserva = entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const itemActual = Array.from(active).find(item => item.dataset.url === entry.target.id);
                removeActive();
                let a = itemActual.querySelector('a');
                a.classList.add('active');
            }
        });
    } 
    const onObservador = new IntersectionObserver(funcObserva, {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    });

    sectione.forEach(section => onObservador.observe(section));
    function overflowHtmlBody (value) {
        document.querySelector('html').style.overflow = value;
        document.querySelector('body').style.overflow = value;
    }

    let modal = document.querySelector('#modal');
    
    if (modal.style.display === 'block') {
        const a = document.createElement('a');
        a.href = '#modal';
        a.classList.add('click')
        document.body.appendChild(a);
        document.querySelector('.click').click();
        overflowHtmlBody('hidden');
    }

     