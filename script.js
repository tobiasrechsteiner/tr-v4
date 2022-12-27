(function() {
    var images = {
   "1": "image/raum-no_web2.jpg",
   "2": "image/masterthesis2.png",
   "3": "image/grilli-type.jpg",
   "4": "image/grotesk.jpg",
   "5": "image/hkb.png",
   "6": "image/eclat.gif",
   "7": "image/prologo.png"
};
    var background = document.getElementById('background');
    var arr = document.getElementsByClassName('navigation');
    for(var i=0; i<arr.length; i++) {
    	arr[i].onmouseover = function(e) {
            var a = e.target;
            var imgId = a.getAttribute('data-image-id');
            var imgSrc = images[imgId];
            var style = ['background-image: url(', imgSrc, ');'].join('');
            background.setAttribute('style', style);
        }
        arr[i].onmouseleave = function(e) {
            var a = e.target;
            var imgId = null;
            var imgSrc = images[imgId];
            var style = ['background-image: url(', imgSrc, ');'].join('');
            background.setAttribute('style', style);
        }
    }
})();