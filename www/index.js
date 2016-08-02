var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
		console.log("bindEvents");
        var self = this;
        document.addEventListener('deviceready', this.onDeviceReady, false);

    },

    onDeviceReady: function() {
		console.log("deviceReady");
		initApp();
        navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 7500});
		//initApp();
    },
}