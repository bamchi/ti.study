$.index.open();

Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;

if (Ti.Geolocation.locationServicesEnabled) {
	// perform other operations with Ti.Geolocation
} else {
	alert('위치서비스를 사용할수 없습니다.');
}

function startButtonClick(e) {
	startListener();
}

function stopButtonClick(e) {
	stopListener();
}

function startListener() {
	Ti.Geolocation.addEventListener("location", locationHandler);
}

function stopListener() {
	Ti.Geolocation.removeEventListener('location', locationHandler);
}

var locationHandler = function(e) {
	if (e.error) {
		alert('Error: ' + e.error);
	} else {
		Ti.API.info(JSON.stringify(e.coords));
	}
};
