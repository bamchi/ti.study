function doClick(e) {
    vibrate();
}

$.index.open();

function vibrate() {
   Ti.Media.vibrate([0,500]);	
}
