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
    $("form").submit(function (event) {
  var inputName = $("#name").val();
  var inputEmail = $("#email").val();
  var x = $("#comment").val();
  if (inputName == "" || inputEmail == "" || x == "") {
    alert("invalid input");
  }
  else {
    alert('Hi  ' +  inputName + ' Thank you for reaching out to us.');
  }
  event.preventDefault();
  });
  });
  /*****************************************************************/
  $(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#overlay").show();
    }).mouseout(function(){
      $("#overlay").hide();
    });
  });
  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
  });
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
  });
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
  });
  
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
    $("#work6").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
    $("#work7").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
    $("#work8").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
  });