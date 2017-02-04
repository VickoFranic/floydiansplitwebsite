$(window).load(function() {

	var url = 'https://floydiansplitapi.herokuapp.com/api/facebook/events/get_last';
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
				'<h4>Najnoviji nastup:</h4><br>' +
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
});