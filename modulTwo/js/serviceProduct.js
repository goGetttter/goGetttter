class ServiceProducts {
    constructor(containerProducts, containerCounter, productsCatalog) {
        this.container = document.querySelector(containerProducts);
        this.containerCounter = document.querySelector(containerCounter);
        this.productsCatalog = productsCatalog;
        this.create();
    }

    create(){
        var wrapper = document.createElement('slot');
        
        var products = serviceStore.getProducts();
        this.containerCounter.innerText = products.length;


        for(var i = 0; i < this.productsCatalog.length; i++){
            // отрисовка при старте
            var index = products.indexOf(this.productsCatalog[i].id);
            
            if (index === -1) {
                var activeClass = '';
                var activeText = 'Заказать';
            } else {
                var activeClass = ' btnPriceActive';
                var activeText = 'Отказаться';
            }
            //Отрисовка элементов
            var item = createNewElement.getElement({
                tagName: 'div',
                className: 'itemPrice'
            });

            var name = createNewElement.getElement({
                tagName: 'div',
                className: 'serviceInContainer',
                innerText: this.productsCatalog[i].name
            });
            
            var price = createNewElement.getElement({
                tagName: 'div',
                className: 'servicePrice',
                innerText: this.productsCatalog[i].price + ' р.'
            });

            var btn = createNewElement.getElement({
                tagName: 'button',
                className: 'btnPrice' + activeClass,
                innerText: activeText,
                id: this.productsCatalog[i].id
            });
            //Обработчик по кнопке 'заказать' 
            btn.addEventListener('click', function(){
                var id = this.getAttribute('data-id');
                var result = serviceStore.putProduct(id);

                serviceProducts.containerCounter.innerText = result.products.length;
                
                if (result.pushProduct){
                    this.classList.add('btnPriceActive');
                    this.innerText = 'Отказаться';
                } else {
                    this.classList.remove('btnPriceActive');
                    this.innerText = 'Заказать';
                }

            });

            item.appendChild(name);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);
        }
        this.container.appendChild(wrapper);
    }
}

var serviceProducts = new ServiceProducts(".containerPrice", '.container-counter', productsCatalog);