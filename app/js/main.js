function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(49.968208, 36.363152),
    });
    const mark = new google.maps.Marker({
        position: new google.maps.LatLng(49.968208, 36.363152),
        map: map,
        title: "г.Харьков, ул.Енакиевская 8"
    });
    const info = new google.maps.InfoWindow({
        content: "<p style='color: red'>Очаг: сетка сварная " +
            "оцинкованная...</p>"
    });

    mark.addListener("click", function () {
        info.open(map, mark)
    });
}

$('.slider').slick({
    arrows: false,
    dots: true
});

$('.slider1').slick({
    arrows: false,
    dots: true
});

$(document).ready(() => {
    var wow = new WOW({
        offset: 60,
        mobile: false
    });
    wow.init();
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
    $('.burger').click(function () {
        $('#header .info, #header .language, #header .header_bottom').slideToggle()
    })
});

$(window).on('scroll', () => {
   if ($("html").scrollTop() > $("#header").height()) {
       $('.up').addClass('active');
       if ($("html").scrollTop() + $(window).height() - parseInt($('.up').css('bottom')) > $('#footer').offset().top) {
           $('.up').addClass('white')
       } else {
           $('.up').removeClass('white')
       }
   } else {
       $('.up').removeClass('active')
   }
});

$(".button").click(function () {
    $('.wrapper_form').addClass('show');
});

$(".close").click(function () {
    $('.wrapper_form').removeClass('show');
});
