const scrollController = {
    scrollPosition: 0,
    disabledScroll() {
        scrollController.scrollPosition = window.scrollY;
        document.body.style.cssText = `
            overflow: hidden;
            position: fixed;
            top: -${scrollController.scrollPosition}px;
            left: 0;
            height: 100vh;
            width: 100vw;
            padding-right: ${window.innerWidth - document.body.offsetWidth}px ;             
        `;
        document.documentElement.style.scrollBehavior = 'unset';
    },
    enabledScroll() {
        document.body.style.cssText = 'position: relative';
        window.scroll({top: scrollController.scrollPosition})
        document.documentElement.style.scrollBehavior = '';
    },
}

const modalController = ({modal, btnOpen, btnClose, time = 300}) => {
    const buttonElems = document.querySelectorAll(btnOpen);
    const modalElem =  document.querySelector(modal);

    modalElem.style.cssText = `
        display: flex;    
        visibility: hidden;
        opacity: 0;
        transition: opacity ${time}ms ease-in-out;
    `;

    // Создаем функцию закрытия мод-го окна

    const closeModal = event => { // Event определяет по каккому элементу был произведен клик
        const target = event.target;

        if (target === modalElem || (btnClose && target.closest(btnClose)) || event.code === 'Escape') { // Проверяем, что target является modalElem или если родитель target содержит .modal-close или если событием является "Escape"
            
            modalElem.style.opacity = 0;

            setTimeout(() => {
                modalElem.style.visibility = 'hidden';
                scrollController.enabledScroll();
            }, time); // Функция для плавного закрытия модального окна

            window.removeEventListener('keydown', closeModal);
        }
    }


    // Создаем функцию открытия мод-го окна
    const openModal = () => {
        modalElem.style.visibility = 'visible';
        modalElem.style.opacity = 1;
        window.addEventListener('keydown', closeModal); // Закрытие модального окна при клике по клавише "Esc"
        scrollController.disabledScroll();
    };

    // Вызываем функцию открытия мод-го окна для всех кнопок
    buttonElems.forEach(btn => {
        btn.addEventListener('click', openModal);
    })

    modalElem.addEventListener('click', closeModal);
};

modalController( {
    modal: '.modal-1',
    btnOpen: '.button-1',
    btnClose: '.modal__close',
})

modalController( {
    modal: '.modal-2',
    btnOpen: '.button-2',
    btnClose: '.modal__close',
})
