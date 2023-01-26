const sliderAust = document.querySelector('#australia'); 
const sliderItemsAust = Array.from(sliderAust.children); // длина массива
const arrowNextAust = document.querySelector('.arrow-aust-next');
const arrowPrevAust = document.querySelector('.arrow-aust-prev');

sliderItemsAust.forEach(function (austslide, index) {    
    
    // Скрываем все слайды, кроме первого
    if (index !== 0) { // Если индекс не равен 0
        austslide.classList.add('hidden'); // То к слайду добавляем класс 'hidden'
    }

    // То же самое условие в одну строку 
    // if (index !== 0) slide.classList.add('hidden');    

    // Добавляем индексы для слайдов
    austslide.dataset.index = index;

    // Добавляем data атрибут active для первого/активного слайда
    sliderItemsAust[0].setAttribute('data-active', '')

    // Клик по слайдам
    austslide.addEventListener('click', function () { 
        showNextSlideAust('next');      
    });
});

arrowNextAust.onclick = function () {   
    showNextSlideAust('next');   
}

arrowPrevAust.onclick = function () { 
    showNextSlideAust('prev');       
};

function showNextSlideAust(direction) {
     // Скрываем текущий слайд
     const currentAustslide = sliderAust.querySelector('[data-active]')  

     // Получаем индекс текущего слайда
     const currentAustslideIndex = +currentAustslide.dataset.index; // " + "  - преобразовывает строку в число
     currentAustslide.classList.add('hidden');
     currentAustslide.removeAttribute('data-active');

     // Рассчитываем следeющий индекс в зависимости от направления движения
     let nextAustslideIndex 
     if (direction === 'next') {
        nextAustslideIndex = currentAustslideIndex + 1 === sliderItemsAust.length ? 0 : currentAustslideIndex + 1;
     } else if (direction === 'prev') {
        nextAustslideIndex = currentAustslideIndex === 0 ? sliderItemsAust.length - 1 : currentAustslideIndex - 1;
     }

     // Показываем следующий слайд
     const nextAustslide = sliderAust.querySelector(`[data-index="${nextAustslideIndex}"]`); // Обратные кавычки для интерполяции. Находим элемент, у которго есть 
     // атрибут data-index со значением nextSlideIndex и записываем его в константу nextSlide
     nextAustslide.classList.remove('hidden');
     nextAustslide.setAttribute('data-active', '');   
}