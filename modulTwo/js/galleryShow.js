
class ExamplesOfArt {
    constructor(galleriContain, gallaryFull, listOfPicture) {
        this.container = document.querySelector(galleriContain);
        this.gallaryFull = document.querySelector(gallaryFull);
        this.listOfPicture = listOfPicture;
        this.create();
        this.changeGalleryFull();
    }
    create() {
        var wrapper = document.createElement('slot');

        for(var i=0; i < this.listOfPicture.length; i++){

            var item = createNewElement.getElement({
                tagName: 'div',
                className: 'galleriItem'
            });
            var name = createNewElement.getElement({
                tagName: 'div', 
                className: 'galleriItemPortrait', 
                innerText: this.listOfPicture[i].name});

            var img = createNewElement.getElement({
                tagName: 'div',
                className: 'galleriPicture',
                backgroundImage: `url(${this.listOfPicture[i].img})`,
                id:this.listOfPicture[i].id
            });
            
            img.addEventListener('click', function(){
                examplesOfArt.gallaryFull.style.display = 'block';
                examplesOfArt.gallaryFull.setAttribute('data-id', this.getAttribute('data-id'));
                
                var number = Number(examplesOfArt.gallaryFull.getAttribute('data-id'));
                examplesOfArt.gallaryFull.style.backgroundImage = `url("${listOfPicture[number].imgFull}")`;
            });

            item.appendChild(name);
            item.appendChild(img);
            wrapper.appendChild(item);  
        }
        this.container.appendChild(wrapper);
    }
    
    changeGalleryFull() {
        // кнопка перелестнуть слайдер назад
        var backPicture = document.querySelector('.btnBack');

        backPicture.addEventListener('click', function () {
            var index = Number(examplesOfArt.gallaryFull.getAttribute('data-id'));

            if (index == 0) {
                index = listOfPicture.length;
            }

            examplesOfArt.gallaryFull.style.backgroundImage = `url("${listOfPicture[--index].imgFull}")`;
            examplesOfArt.gallaryFull.setAttribute('data-id', index--);

        });

        // кнопка перелестнуть слайдер вперед
        var nextPicture = document.querySelector(".btnNext");

        nextPicture.addEventListener("click", function () {
            var index = Number(examplesOfArt.gallaryFull.getAttribute("data-id"));

            if (index == listOfPicture.length - 1) {
                index = -1;
            }
            examplesOfArt.gallaryFull.style.backgroundImage = `url("${listOfPicture[++index].imgFull}")`;
            examplesOfArt.gallaryFull.setAttribute('data-id', index++);
        });

        // закрыть слайдер
        var closs = document.querySelector(".gallery-close");

        closs.addEventListener('click', function () {
            examplesOfArt.gallaryFull.style.display = 'none';
        });
    }

}
var examplesOfArt = new ExamplesOfArt('.galleriContain', '.gallary-full', listOfPicture);