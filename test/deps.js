var click = function (el){
    var ev = document.createEvent("MouseEvent");
    ev.initMouseEvent(
      "click",
      true /* bubble */, true /* cancelable */,
      window, null,
      0, 0, 0, 0, /* coordinates */
      false, false, false, false, /* modifier keys */
      0 /*left*/, null
    );
    el.dispatchEvent(ev);
};

var expect = chai.expect;

var chrome = {
  extension: {
    getURL: function(loca){ return "../../"+loca; }
  }
};

var mochaRunTests = function(){
  mocha.run();
};