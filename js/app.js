
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
const cursor = document.getElementById('cursor'); // Obtén el elemento con id 'cursor'

themeToggle.addEventListener('click', () => {
    if (root.style.getPropertyValue('--blanco') === 'white') {
        // Si el tema actual es claro, cambia a oscuro
        root.style.setProperty('--blanco', '#181818');
        root.style.setProperty('--blanco-2', 'rgba(0,0,0,.2)');
        root.style.setProperty('--negro', '#e0e0e0');
        root.style.setProperty('--negro-5', 'rgba(255, 255, 255, 0.5)');
        root.style.setProperty('--negro-7', 'rgba(255, 255, 255, 0.75)');
        root.style.setProperty('--cursorColor', 'var(--negro-7)'); // Actualiza --cursorColor
    } else {
        // Si el tema actual es oscuro, cambia a claro
        root.style.setProperty('--blanco', 'white');
        root.style.setProperty('--blanco-2', 'rgba(255,255,255,.2)');
        root.style.setProperty('--negro', 'black');
        root.style.setProperty('--negro-5', 'rgba(0, 0, 0, 0.5)');
        root.style.setProperty('--negro-7', 'rgba(0, 0, 0, 0.75)');
        root.style.setProperty('--cursorColor', 'var(--blanco)'); // Actualiza --cursorColor
    }
    
    // Actualiza el color del cursor
    cursor.style.backgroundColor = root.style.getPropertyValue('--cursorColor');
});



let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come back 🤑";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})









$(function(){

    // Rotate Skill Badges
    var $badges = $(".amg-badge img");
    
    function rotateBadge(passedBadge, speed){
      var rotateSpeed = speed / 180,
          current = 0;
    
      function badgeRotation(passedBadge){
        current = (current == 90) ? 271 : current + 1;
    
        passedBadge.css({
          "-webkit-transform":"rotate3d(0,1,0," + current + "deg)",
          "-moz-transform":"rotate3d(0,1,0," + current + "deg)",
          "transform":"rotate3d(0,1,0," + current + "deg)"
        });
    
        if (current == 360) {
          clearInterval(rotateInterval);
          passedBadge.removeAttr('style').removeClass('spinning');
        }
      }
    
      var rotateInterval = setInterval(function(){badgeRotation(passedBadge)}, rotateSpeed);
    }
    
    $badges.mouseenter(function(){
      if ($(this).hasClass('spinning')) {
        return false;
      } else {
        rotateBadge($(this), 500);
        $(this).addClass('spinning');
      }
    });
    
    });
