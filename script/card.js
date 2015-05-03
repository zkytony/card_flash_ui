// Script for card div

// called when the html document finishes loading
$(document).ready(function() {
  
  // This function is called when .one-card element is clicked
  // We want to flip the card
  //  $(document).on("click", ".one-card", function(e) {
  //    flip($(this));
  //  });

  $(".one-card")
     .hover(function() {
       $(this).closest(".one-card").css("z-index", 1);

       // this is where the popping out effect happens
       $(this).animate({ height: "+=40", width: "+=40", left: "-=10", top: "-=10" }, "fast");

     }, function() {
       $(this).closest(".one-card").css("z-index", 0);
       $(this).animate({ height: "-=40", width: "-=40", left: "+=10", top: "+=10" }, "fast");
     })
     .on('click', function(e) {
       flip($(this));
     });
    
  $(document).on("click", "#loginLink", function(e) {
    flip($("#register-login-card"));
  });
  
  
  // This function is called when refresh-btn is clicked
  // We want to update the display of the card
  $(document).on("click", "#refresh-btn", function() {
    var width = parseInt($('#width-field').val());
    var height = parseInt($('#height-field').val());
    var radius = parseInt($('#radius-field').val());

    $(".one-card").css({
      'width': width + 'px',
      'height': height + 'px',
    });
    // apply radius - needs to apply directly on front and back
    $(".one-card-front").css({
      'border-radius': radius + 'px'
    });
    $(".one-card-back").css({
      'border-radius': radius + 'px'
    });
  });

});

// This is a helper function for flipping the element
// by adding a class 'flip' to the element. 'flip' class
// is defined in card.css
// Expects the paramter to be JQuery Object
function flip(jqueryObj) {
  if (!jqueryObj.hasClass('flip')) {
    jqueryObj.addClass('flip');
  } else {
    jqueryObj.removeClass('flip');
  }
}

// Builds an HTML string for the card div
// and appends this HTML string to the parent element given
//
// front - the html for stuff to show on the front
// back -  the html for stuff to show on the back
// width - the width of the card (in pixel);
// height - the height of the card (in pixel);
// radius - the radius of the round corner; set to 0 if want right angle corners
// id - the id you want to give for this card div
// parentID - the parent element's id you want to append this card div to
function showCard(front, back, width, height, radius, id, parentID) {
  // 'one-card' class defines the general style of one card
  // 'flipper', 'flipper-front', 'flipper-back', 'flip', together makes the div flippable
  var html = "<div id='" + id + "-card' class='one-card flipper'>";
  html += "<div id='" + id + "-front' class='one-card-front flipper-front'>" + front + "</div>";
  html += "<div id='" + id + "-back' class='one-card-back flipper-back'>" + back + "</div>";
  html += "</div>";

  $("#" + parentID).append(html);
  $("#" + id + '-card').css({
    'width': width + 'px',
    'height': height + 'px',
  });
  // apply radius - needs to apply directly on front and back
  $("#" + id + '-front').css({
    'border-radius': radius + 'px'
  });
  $("#" + id + '-back').css({
    'border-radius': radius + 'px'
  });
}
