Titanium.Painter = require("ti.paint");

var paintView = Titanium.Painter.createPaintView({
  top: 100,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "white",
  strokeColor: "black",
  strokeWidth: 5	
});

paintView.textFieldId = "paint";

$.container.add(paintView);

function saveFile() {
  if (Ti.Filesystem.isExternalStoragePresent()) {
    var temp_target = Titanium.Filesystem.getFile(Ti.Filesystem.externalStorageDirectory, "sign.png");
    temp_target.write(paintView.toImage());
    Ti.API.info("file reads :" + temp_target.read());
    
    alert("저장되었습니다");
  } else {
    alert("ExternalStorage 사용할 수 없음");
  }
}

function doClick(e) {
  saveFile();
}

$.container.open();
