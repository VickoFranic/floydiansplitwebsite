
$(document).ready(function() {
    $('#title').fadeIn(4000);
    $('#subtitle').fadeIn(7000);

    loadImages();
    
});



function loadImages() {

    var url = "http://localhost:8000/api/facebook/albums/858332967512883";

    $.get(url, function (data) {
            $.each(data, function (index, element) {
                $('.masonry').append('<div class="item"><img onclick=openFancyBox(' + JSON.stringify(element) + ') src="' + element.url + '" /></div>');
            });
        }
    );
}

function openFancyBox(element) {

    $.featherlight(element.url);
}