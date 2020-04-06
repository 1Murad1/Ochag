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
    $("#form").submit(function () {
        let quantity = $('form input').length;
        let inputDone = 0;
        $('form input').each(function () {
            $(this).attr('required', true)
            if ($(this).val()) {
                inputDone++
            }
        });
        if (inputDone === quantity) {
            let formID = $(this).attr('id');
            let formNm = $('#' + formID);
            $.ajax({
                type: "POST",
                url: '/php/contact-form.php',
                data: formNm.serialize(),
                beforeSend: function() {
                    $('button[type="submit"]').addClass('load');
                },
                complete: function(){
                    $('button[type="submit"]').removeClass('load');
                },
                success: function (data) {
                    formNm.find('input, textarea').not(':input[type=submit], :input[type=hidden]').val('');
                    $('button[type="submit"]').addClass('ok');
                },
                error: function (jqXHR, text, error) {
                    console.log(jqXHR, text, error);
                    $('button[type="submit"], form .checkbox').addClass('error');
                }
            });
            return false;
        } else {
            $('button[type="submit"], form .checkbox').addClass('error');
            return false
        }
    });
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

$(".send").click(function () {
    $('.wrapper_form').addClass('show');
});

$(".close").click(function () {
    $('.wrapper_form').removeClass('show');
});
