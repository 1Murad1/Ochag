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