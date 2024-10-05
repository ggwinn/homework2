$(document).ready(function() {
  // Toggle the receive spam checkbox
  $("#receivespambutton").click(function() {

    if($($("#receivespambutton").children()[0]).attr("src")=="unchecked.png") {
      $($("#receivespambutton").children()[0]).attr("src","checked.png");
      $("#spamyn").val("y");
    } else {
      $($("#receivespambutton").children()[0]).attr("src","unchecked.png");
      $("#spamyn").val("n");
    }
  });


  // Play video
  $("#videoplayer").mousedown(function() {

    if($($("#videoplayer").children()[0]).attr("src")=="play.png") {
      $($("#videoplayer").children()[0]).attr("src","pause.jpg");
      $("#thevideo")[0].play();
    } else {
      $($("#videoplayer").children()[0]).attr("src","play.png");
      $("#thevideo")[0].pause();
    }
  });

  // Form validation
  $("#signupbutton").click(function() {
    if($("#fn").val()=="" || $("#mi").val()=="" || $("#ln").val()=="") {
      $("#name").addClass("error");

      return;
    } else {
      $("#name").removeClass("error");
    }

    if($("#em").val()=="") {
      $("#email").addClass("error");

      return;
    } else {
      $("#name").removeClass("error");
    }

    alert("Thank you!  Please watch your email for our exciting newsletter and offers!");
  });
});
//so that when the user clicks on the checked button, it switches to checked png
$(document).ready(function() {
  $('#receivespambutton').on('click keypress', function(event) {
    if (event.type === 'click' || (event.type === 'keypress' && (event.key === 'Enter' || event.key === ' '))) {
      var isChecked = $(this).attr('aria-checked') === 'true';
      $(this).attr('aria-checked', !isChecked);
      $(this).find('img').attr('src', isChecked ? 'unchecked.png' : 'checked.png');
      $('#spamyn').val(isChecked ? 'n' : 'y');
    }
  });
});
//used help from https://www.w3.org/TR/wai-aria-practices-1.1/examples/checkbox/checkbox-1/checkbox-1.html and copilot in vscode for the last code segment

