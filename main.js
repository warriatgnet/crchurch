// sticky navbar code
window.onscroll = function () {myFunction() };

var navbar = document.getElementById("main-navbar-header");

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

$(document).ready(function() {

    //---------------------------------------------
  //Nivo slider
  //---------------------------------------------
  $('#slider').nivoSlider({
    effect: 'random',
    slices: 15,
    boxCols: 12,
    boxRows: 8,
    animSpeed: 500,
    pauseTime: 5000,
    startSlide: 0,
    directionNav: true,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false,
  });
  
  /*=================================
        WOW
    ================================*/
    new WOW().init();
    
    /*=================================
        GOOGLE MAP
    ================================*/
    var map = new GMaps({//original -12.043333, lng: -77.028333
        el: '#map', //6.5436002,3.2736897
        lat: 6.528459,
        lng: 3.278476,
          zoom: 20
      });
        
        map.addMarker({
            lat: 6.528459,
            lng: 3.278476,
            title: 'Christian Assembly International',
            click: function(e) {
                alert('You clicked in this marker');
            }
        });
    
        
          url = GMaps.staticMapURL({
              size: [610, 300],
              lat: 6.528459,
              lng: 3.278476,
              zoom: 20
          });
  
          $('<img/>').attr('src', url)
          .appendTo('#map');
  


});