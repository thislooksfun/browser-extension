var storage_get = function(key, cb){
  cb(localStorage.getItem(key));
};
var storage_set = function(key, value, cb){
  localStorage.setItem(key, value);
  cb();
};

// console.dir(safari.extension);
// Codecov(safari.extension.settings);

// self.port.on("preferences", function(prefs){
  
  $(function() {
    window.codecov = create_codecov_instance({'overlay': true, 'enterprise': '', 'debug': false, 'hosts': ''});
    window.addEventListener("pjax:success", function(event){
      // cannot figure out how to attach to pjax:success, but this is a hack
      window.codecov._start();
    }, false);
  });
  
// });