var pushnotifications = require('com.pushwoosh.module');
Ti.API.info("module is => " + pushnotifications);

pushnotifications.pushNotificationsRegister({
  "pw_appid": "EE729-D2D5F",
  "gcm_projectid": "620565021084",
  success: function (e) {
    setTimeout(function () {
      Ti.API.info('JS registration success event: ' + e.registrationId);
      alert('JS registration success event: ' + e.registrationId);
    }, 0);
  },
  error: function (e) {
    setTimeout(function () {
      Ti.API.error("Error during registration: " + e.error);
      alert("Error during registration: " + e.error);
    }, 0);
  },
  callback: function (e) // called when a push notification is received
  {
    setTimeout(function () {
      //push notifications title: (Android) e.data.title or (iOS)e.data.aps.alert
      Ti.API.info('JS message event: ' + JSON.stringify(e.data));
      var data = JSON.parse(e.data);
      alert(data.title);
    }, 0);
  }
});

$.index.open();
