// const slider = document.querySelector('.slide-container'); 
const sliderAltay = document.querySelector('#altay'); 


const sliderItemsAltay = Array.from(sliderAltay.children); // длина массива

const arrowNext = document.querySelector('#arrowNextAltay');
const arrowPrev = document.querySelector('#arrowPrevAltay');

sliderItemsAltay.forEach(function (altayslide, index) {    
    
    // Скрываем все слайды, кроме первого
    if (index !== 0) { // Если индекс не равен 0
        altayslide.classList.add('hidden'); // То к слайду добавляем класс 'hidden'
    }

    // То же самое условие в одну строку 
    // if (index !== 0) slide.classList.add('hidden');    

    // Добавляем индексы для слайдов
    altayslide.dataset.index = index;

    // Добавляем data атрибут active для первого/активного слайда
    sliderItemsAltay[0].setAttribute('data-active', '')

    // Клик по слайдам
    altayslide.addEventListener('click', function () { 
        showNextSlideAltay('next');      
    });
});

arrowNext.onclick = function () {   
    showNextSlideAltay('next');   
}

arrowPrev.onclick = function () { 
    showNextSlideAltay('prev');       
};

function showNextSlideAltay(direction) {
     // Скрываем текущий слайд
    //  const currentSlide = slider.querySelector('[data-active]')  
     const currentAltayslide = sliderAltay.querySelector('[data-active]')  


     // Получаем индекс текущего слайда
     const currentAltayslideIndex = +currentAltayslide.dataset.index; // " + "  - преобразовывает строку в число
     currentAltayslide.classList.add('hidden');
     currentAltayslide.removeAttribute('data-active');

     // Рассчитываем следeющий индекс в зависимости от направления движения
     let nextAltayslideIndex 
     if (direction === 'next') {
        nextAltayslideIndex = currentAltayslideIndex + 1 === sliderItemsAltay.length ? 0 : currentAltayslideIndex + 1;
     } else if (direction === 'prev') {
        nextAltayslideIndex = currentAltayslideIndex === 0 ? sliderItemsAltay.length - 1 : currentAltayslideIndex - 1;
     }

     // Показываем следующий слайд
     const nextAltayslide = sliderAltay.querySelector(`[data-index="${nextAltayslideIndex}"]`); // Обратные кавычки для интерполяции. Находим элемент, у которго есть 
     // атрибут data-index со значением nextSlideIndex и записываем его в константу nextSlide
     nextAltayslide.classList.remove('hidden');
     nextAltayslide.setAttribute('data-active', '');   
}








