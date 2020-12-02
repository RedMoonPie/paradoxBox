document.getElementById("cart-info").addEventListener
('click', function () {

    const cart = document.getElementById("cart");
    cart.classList.toggle("show-cart");
    console.log(cart);
    
});

function navc(x) {
    
    if(x.matches){
        var tmp = document.querySelectorAll('#myNavbar .nav-link');
        tmp.forEach(link => {
            link.classList.remove('nav-link')
            link.classList.add('nav2')
        });
    }else{
        var tmp = document.querySelectorAll('#myNavbar .nav2');
        tmp.forEach(link => {
            link.classList.remove('nav2')
            link.classList.add('nav-link')
        });
    };
};
var x = window.matchMedia('(max-width: 992px)');
navc(x);
x.addListener(navc);