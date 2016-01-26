// preventing sleep
Ti.App.idleTimerDisabled = true;

var number = 'tel:114';

function phoneCall(e) {
  Ti.Platform.openURL(number);
}

function phoneCallIntent(e) {
  var intent = Ti.Android.createIntent({
    action: Ti.Android.ACTION_CALL,
    data: number
  });
  Ti.Android.currentActivity.startActivity(intent);
}

function openWeb() {
  Ti.Platform.openURL("http://google.com");
}

$.index.open();
