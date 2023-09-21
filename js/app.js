'use strict'



$(document).ready(function(){

    $('body').on({ 'mousemove' : function( e ){
        console.clear()
         let clientX = e.originalEvent.clientX
         let clientY = e.originalEvent.clientY

        $('#cursor ').css({
            'left' : (clientX -40 ) + 'px',
            'top' : (clientY -40 ) + 'px'

        })
    }})

    $('a').on({
        'mouseover' : function(){
            $('#cursor').addClass('mini')
        },
        'mouseout' : function(){
            $('#cursor').removeClass('mini')

        },

    
})

})




// Cambiar tema
const themeToggle = document.getElementById('checkbox');
const root = document.documentElement; // Obtén el elemento :root

themeToggle.addEventListener('click', () => {
    if (root.style.getPropertyValue('--blanco') === 'white') {
        // Si el tema actual es claro, cambia a oscuro
        root.style.setProperty('--blanco', '#181818');
        root.style.setProperty('--blanco-2', 'rgba(0,0,0,.2)');
        root.style.setProperty('--negro', '#e0e0e0');
        root.style.setProperty('--negro-5', 'rgba(255, 255, 255, 0.5)');
        root.style.setProperty('--negro-7', 'rgba(255, 255, 255, 0.75)');
    } else {
        // Si el tema actual es oscuro, cambia a claro
        root.style.setProperty('--blanco', 'white'); // Cambia el rojo a blanco
        root.style.setProperty('--blanco-2', 'rgba(255,255,255,.2)');
        root.style.setProperty('--negro', 'black');
        root.style.setProperty('--negro-5', 'rgba(0, 0, 0, 0.5)');
        root.style.setProperty('--negro-7', 'rgba(0, 0, 0, 0.75)');
    }
});


let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Hire me 😞";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})