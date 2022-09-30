"use strict";


// SLIDER

let index = 0;



function slider() {
   if (index > $a('.slide-item').length - 1) {
      index = 0
   }

   if (index < 0) {
      index = $a('.slide-item').length - 1;
   }

   $('.slide-list').style.transform = `translateX(-${index*1000}px)`;
}




$('.next').addEventListener('click', () => {
   index++;
   slider()
   console.log(index);
})

$('.prev').addEventListener('click', () => {
   index--;
   slider()
   console.log(index);
})


setInterval(() => {
   index++;
   slider()
}, 5000)



// ACCARDION


$a('.accardion-tab').forEach((item,index) => {
   item.addEventListener('click', () => {

      console.log(item.nextElementSibling.style.maxHeight.length);
      console.log(item.nextElementSibling.scrollHeight);

      if (item.nextElementSibling.style.maxHeight.length === 0) {
         item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + "px";
         $a('.dot')[index].style.transform=`rotate(90deg)`;
      } else {
         item.nextElementSibling.style.maxHeight = null;
         $a('.dot')[index].style.transform=`rotate(0deg)`;
      }

   })
})