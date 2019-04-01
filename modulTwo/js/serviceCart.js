class ServiceCart {
    constructor(containerCounter, containerCart, productsCatalog) {
        this.containerCounter = document.querySelector(containerCounter);
        this.containerCart = document.querySelector(containerCart);
        this.productsCatalog = productsCatalog;
        this.create();
    }
    create(){
        this.containerCounter.addEventListener('click', function(){
            serviceCart.containerCart.style.display = "flex";
            var productCart = serviceCart.getProductsCart();
            var wrapper = document.createElement('slot');

            for( var i = 0; i < productCart.length; i++ ){

                var item = createNewElement.getElement({
                    tagName: 'div',
                    className: 'orderItem'
                });

                var name = createNewElement.getElement({
                    tagName: 'div',
                    className: 'orderedName',
                    innerText: productCart[i].name
                });

                var price = createNewElement.getElement({
                    tagName: 'div',
                    className: 'orderedPrice',
                    innerText: productCart[i].price + ' р.'
                });

                item.appendChild(name);
                item.appendChild(price);
                wrapper.appendChild(item);
            }

        var close = createNewElement.getElement({ tagName: 'div', className: 'cartClose'});

        var html = serviceCart.containerCart.innerHTML;
        close.addEventListener('click', function(){
            serviceCart.containerCart.innerHTML = html;
            serviceCart.containerCart.style.display = 'none';
        });

        serviceCart.containerCart.appendChild(wrapper);
        serviceCart.containerCart.appendChild(close);
        });
    }
    getProductsCart(){
        var products = serviceStore.getProducts();
        var productCart = [];
        for(var i=0; i<this.productsCatalog.length; i++){
            if(products.indexOf(this.productsCatalog[i].id) !== -1){
                productCart.push(this.productsCatalog[i]);
            }
        }
        return productCart;
    }
}
var serviceCart = new ServiceCart('.container-counter', '.containerCart', productsCatalog);