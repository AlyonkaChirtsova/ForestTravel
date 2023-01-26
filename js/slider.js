const slider = document.querySelector('.slide-container');
const sliderItems = Array.from(slider.children); // длина массива
const arrowNext = document.querySelector('#arrowNext');
const arrowPrev = document.querySelector('#arrowPrev');

sliderItems.forEach(function (slide, index) {    
    
    // Скрываем все слайды, кроме первого
    if (index !== 0) { // Если индекс не равен 0
        slide.classList.add('hidden'); // То к слайду добавляем класс 'hidden'
    }

    // То же самое условие в одну строку 
    // if (index !== 0) slide.classList.add('hidden');    

    // Добавляем индексы для слайдов
    slide.dataset.index = index;

    // Добавляем data атрибут active для первого/активного слайда
    sliderItems[0].setAttribute('data-active', '')

    // Клик по слайдам
    slide.addEventListener('click', function () { 
        showNextSlide('next');      
    });
});

arrowNext.onclick = function () {   
    showNextSlide('next');   
}

arrowPrev.onclick = function () { 
    showNextSlide('prev');       
};

function showNextSlide(direction) {
     // Скрываем текущий слайд
    //  const currentSlide = slider.querySelector('[data-active]')  
     const currentSlide = slider.querySelector('[data-active]')  


     // Получаем индекс текущего слайда
     const currentSlideIndex = +currentSlide.dataset.index; // " + "  - преобразовывает строку в число
     currentSlide.classList.add('hidden');
     currentSlide.removeAttribute('data-active');

     // Рассчитываем следeющий индекс в зависимости от направления движения
     let nextSlideIndex 
     if (direction === 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
     } else if (direction === 'prev') {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
     }

     // Показываем следующий слайд
     const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`); // Обратные кавычки для интерполяции. Находим элемент, у которго есть 
     // атрибут data-index со значением nextSlideIndex и записываем его в константу nextSlide
     nextSlide.classList.remove('hidden');
     nextSlide.setAttribute('data-active', '');   
}








