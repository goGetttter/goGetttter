var item = document.querySelector('.helpMenu');

var nav = document.querySelector('.navMenu');

item.addEventListener('click', function(){
    this.classList.toggle('activeHelpMenu');

    
    nav.classList.toggle('navMenuActive');
});

