
$(document).ready(function() {
    $('#title').fadeIn(4000);
    $('#subtitle').fadeIn(7000);

    loadImages();
    showEvents();
});



function loadImages() {

    var url = "https://floydiansplitapi.herokuapp.com/api/facebook/albums/858332967512883";

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

function showEvents() {

    var html = `
    <div class="center-block text-center">
    <div class="fb-page" data-href="https://www.facebook.com/FloydianSplit/" data-tabs="events"
    data-hide-cover="true" 
    data-width="500"
    data-adapt-container-width="true" 
    data-hide-cover="false"><blockquote cite="https://www.facebook.com/FloydianSplit/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/FloydianSplit/"></a></blockquote></div>
    </div>
    `;

    var options = {
        positionClass: "toast-top-right",
        timeOut: 0,
        extendedTImeout: 0
    }

    toastr.info(html, '<h4>Sljedeći nastupi</h4>', options);

    $(".toast").css('background-color', 'transparent');
    $(".toast").css('box-shadow', '0 0 0');
    $(".toast").css('-webkit-box-shadow', '0 0 0');
    $(".toast").css('-moz-box-shadow', '0 0 0');
}