$(document).ready(function() {
    $(".design, .overserv1").click(function() {
      $("#design").toggle();
      $(".overserv1").toggle();
    });
  });

  $(document).ready(function() {
    $(".develop, .overserv2").click(function() {
      $("#develop").toggle();
      $(".overserv2").toggle();
    });
  });

  $(document).ready(function() {
    $(".product, .overserv3").click(function() {
      $("#product").toggle();
      $(".overserv3").toggle();
    });
  });
  /****************************************************************** */

  $(document).ready(function(){
    $("form").submit(function(event){
      // event.preventDefault();
      var name = $("input#name").val();
      var email = $("input#email").val();
      var message = $("textarea#comment").val();
      if ($("input#name").val() && $("input#email").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  
  });