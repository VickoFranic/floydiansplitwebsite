$(window).load(function() {

	$.notify({
		icon: './public/assets/images/logo.jpg',
		title: 'Imaš pitanje?'
	},{
		type: 'minimalist',
		delay: 10000,
		icon_type: 'image',
		template: '<div data-notify="container" class="col-xs-8 col-sm-3 alert alert-{0}" role="alert">' +
			'<img data-notify="icon" class="img-circle img-thumbnail center-block">' +
			'<span data-notify="title">{1}</span>' +
			'<br><a href="#" class="btn btn-success btn-block btn-sm" style="outline: none" data-toggle="modal" data-target="#myModal">Kontaktiraj nas !</a>' +
		'</div>',
		autoHide: false,
		clickToHide: true,
		placement: {
			from: "bottom",
			align: "right"
		}
	});

	var url = 'http://floydiansplitapi.dev/api/facebook/events/get_last';
	$.getJSON(url, function(response, status) {
		if (status == 'success') {
			
			var startTime = moment(response.start_time);
			var now = moment();

			/**
			 * Show notification only if start time/date is in the future
			 */
			if (startTime > now) {
				buildNotification(response);
			}
		}
	});

	function buildNotification(eventData) {

		$.notify({
			icon: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c7.99.706.706/s50x50/1504041_766540203358827_4627077962019328691_n.jpg?oh=c5432ed93c4a2432f55108413e0c36fb&oe=5923A975',
			title: buildTitle(eventData),
			message: buildMessage(eventData),
			url: 'https://facebook.com/floydiansplit/events',
			target: '_blank'
		},{
			type: 'minimalist',
			delay: 10000,
			icon_type: 'image',
			placement: {
				from: "bottom",
				align: "right"
			},
			template: '<div data-notify="container" class="col-sm-4 col-sm-offset-6 alert alert-{0}">' +
						'<img data-notify="icon" class="img-circle pull-right"><br>' +
						'<p><strong data-notify="title">{1}</strong></p>' +
						'<p><small>{2}</small></p>' +
						'<a href="{3}" target="{4}" data-notify="url"></a>' +
					'</div>'
		});

		function buildTitle(data) {
			moment.locale('hr');
			var dt = moment(data.start_time).format('LLLL');

			var title = 
				'<h4>NAJAVA !</h4><br>' +
				'<h5>' + data.name + '</h5>' +
				'<br><span>' + dt + '</span>';

			return title;
		}

		function buildMessage(data) {

			var message = 
				'<span class="glyphicon glyphicon-map-marker"></span>' +
				'<br>' + data.place.name + 
				'<br>' + data.place.location.street + 
				'<br>' + data.place.location.city;

			return message;
		}
	}

	$('#contact-us-form').on('submit', function(e) {
		e.preventDefault();
		$("#send").addClass('not-active');
		
		var email = $('#email').val();
		var message = $('#message').val();

		if (! email) {
			email = "no@email.dev";
		}

		var url = 'https://floydiansplitapi.herokuapp.com/api/contact_us_email';
		var data = {
			"from": email,
			"message": message
		};

		$.ajax({
			url: url, 
			type: 'POST',
			data: JSON.stringify(data),
			dataType: 'json',
			contentType: 'application/json',
			success: function(response) {
				$('#myModal').modal('hide');
				$.notify({message: 'Email uspješno poslan !'});
				$("#send").removeClass('not-active');
			},
			error: function(response) {
				$('#myModal').modal('hide');
				$.notify({message: 'Whoops...dogodio se problem kod slanja, molimo pokušajte ponovno'});
				$("#send").removeClass('not-active');
			}
		});
	});

});