var number = 'tel:01032530135';

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

$.index.open();
