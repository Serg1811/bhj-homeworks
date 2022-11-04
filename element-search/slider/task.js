// массив со слайдами
SliderItem = Array.from(document.querySelectorAll('.slider__item'));

// находим индекс активного слайда
function activeSlide() {
   return SliderItem.findIndex(slide => slide.classList.contains('slider__item_active'));
   
} 

// деактивация текущего слайда и текущей точки
function deactivateSlide(index) {
   SliderItem[index].classList.remove('slider__item_active')
   document.querySelectorAll('.slider__dot')[index].classList.remove('slider__dot_active')
}

// активация слайда и точки
function activateSlide(index) {
   SliderItem[index].classList.add('slider__item_active')
   document.querySelectorAll('.slider__dot')[index].classList.add('slider__dot_active')
}

// определение позиции для активации
function getIndexActivate(index, arr=SliderItem) {
   if (index < 0) {
      return arr.length - 1
   } else if (index > arr.length -1) {
      return 0;
   } else {
      return index;
   }
}

//обработка события стрелкой вперед
document.querySelector('.slider__arrow_next').onclick = () => {
   indexSlide = activeSlide();
   console.log(indexSlide);
   deactivateSlide(indexSlide);
   activateSlide(getIndexActivate(++indexSlide));
}

// обработка события стрелкой назад
document.querySelector('.slider__arrow_prev').onclick = () => {
   indexSlide = activeSlide();
   console.log(indexSlide);
   deactivateSlide(indexSlide);
   activateSlide(getIndexActivate(--indexSlide));
}

//обработка события точки
const dotItem = document.querySelectorAll('.slider__dot')
for ( let i = 0; i < dotItem.length; i++) {
   dotItem[i].onclick = () => {
      deactivateSlide(activeSlide());
      activateSlide(i);
   }
}
