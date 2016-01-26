$.index.open();
var indicate = $.progress;
indicate.hide();

var file = Ti.Filesystem.getFile(Ti.Filesystem.externalStorageDirectory, 'Download.apk');

function startDownload() {
  indicate.show();

  var xhr = Ti.Network.createHTTPClient({
    onload: function () {
      file.write(this.responseData);

      Ti.App.fireEvent('graphic_downloaded', {
        filepath: file.nativePath
      });
    },
    ondatastream: function (e) {
      indicate.value = e.progress;
    },
    timeout: 600 * 1000
  });

  var downloadUrl = 'https://s3.ap-northeast-2.amazonaws.com/tidev/SelfUpdate.apk';

  xhr.open('GET', downloadUrl);
  xhr.send();

  Ti.App.addEventListener('graphic_downloaded', function (e) {
    startInstall();
  });
}

function startInstall() {
  var intent = Ti.Android.createIntent({
    action: Ti.Android.ACTION_VIEW,
    data: file.nativePath,
    type: 'application/vnd.android.package-archive',
    packageName : 'com.android.packageinstaller'
  });
  intent.setFlags(Ti.Android.FLAG_ACTIVITY_NEW_TASK);
  Ti.Android.currentActivity.startActivity(intent);
}
