document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
  });

 $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tap-target');
    var instances = M.TapTarget.init(elems);
    instance.next();
  instance.next(3);
   instance.close();
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.tap-target').tapTarget();
  });

  
    $(document).ready(function(){
    $('.parallax').parallax();
  });      

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
  });
