// Onclick

(function () {
    "use strict";
    
    var flip = document.getElementById('flip'),
        button = document.getElementById('btn1');

    button.onclick = function () {
        flip.className = 'animate';
    };
  
})();

(function () {
    "use strict";
    
    var container = document.getElementById('container'),
        button = document.getElementById('btn2');

    button.onclick = function () {
        container.className = 'opacity';
    };
  
})();