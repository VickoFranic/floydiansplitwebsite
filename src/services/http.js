import $ from 'jquery';

class Http {
    constructor() {
        this.API = 'http://floydiansplitapi.dev/api/';
    }

    getAllEvents() {
        var promise = $.ajax({
            url: this.API + 'facebook/events',
            dataType: 'json',
            cache: false
        });

        return promise;
    }
}

export default Http;