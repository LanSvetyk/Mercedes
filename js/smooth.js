const menuListLink = document.querySelectorAll(".menu-list__link");
const mainScroll = document.querySelector(".main__scroll");
//объединяем массив с элементом, используя спред оператор
const newArray = [...menuListLink, mainScroll];

newArray.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const eventTarget = event.target.getAttribute('href').substring(1);
   
   document.getElementById(eventTarget).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
   }

   )


  });
});
