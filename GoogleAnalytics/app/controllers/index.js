var ga = require('ti.ga');
Ti.API.info("module is => " + ga);

ga.setOptOut(false);
ga.setDebug(true);

var tracker = ga.createTracker({
  trackingId: 'UA-65668062-16',
  useSecure: true,
  debug: true
});

tracker.startSession();

tracker.addScreenView('main screen');

function doClick1(e) {
  tracker.addScreenView('screen2');
}

function doClick2(e) {
  tracker.addEvent({
    category: "myCategory-Event",
    action: "myAction",
    label: "myLabel",
    value: 1
  });
}

function doClick3(e) {
  tracker.addEvent({
    category: "myCategory-Event2",
    action: "myAction2",
    label: "myLabel2",
    value: 1
  });
}

$.index.addEventListener('close', function () {
  tracker.endSession();
  ga.dispatch();
});

$.index.open();
