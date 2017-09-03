function sendMessage() {

    var name = $('input[name="name"]').val();
    var message = $('textarea[name="message"]').val();

    $('#submit-btn').attr('disabled', true);
    toastr.info('Molimo pričekajte...');

    data = {
        from: name,
        message: message
    }

    $.ajax({
        type: "POST",
        contentType: 'application/json',
        dataType: "json",
        url: "https://floydiansplitapi.herokuapp.com/api/contact_us_email",
        data: JSON.stringify(data),
        success: function (response) {
            toastr.success(name + ', vaša poruka je uspješno poslana ;)');
            setTimeout(function() {
                location.replace('/');
            }, 3500);
        },
        error: function(err) {
            toastr.error("Ups...mail trenutno nije moguće poslati, probajte kasnije.");
        }
    });
}