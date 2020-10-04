$(document).ready(function () {
  $(".design, .overserv1").click(function () {
    $("#design").toggle();
    $(".overserv1").toggle();
  });
});

$(document).ready(function () {
  $(".develop, .overserv2").click(function () {
    $("#develop").toggle();
    $(".overserv2").toggle();
  });
});

$(document).ready(function () {
  $(".product, .overserv3").click(function () {
    $("#product").toggle();
    $(".overserv3").toggle();
  });
});
/****************************************************************** */

$(document).ready(function () {
  $("form").submit(function (event) {
    var inputName = $("#name").val();
    var inputEmail = $("#email").val();
    var x = $("#comment").val();
    if (inputName == "" || inputEmail == "" || x == "") {
      alert("invalid input");
    }
    else {
      alert('Hi  ' + inputName + ' Thank you for reaching out to us.');
    }
    event.preventDefault();
  });
});
  /*****************************************************************/
