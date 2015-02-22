// Script for card div

// called when the html document finishes loading
$(document).ready(function() {
  
  // This function is called when .one-card element is clicked
  // We want to flip the card
  $(document).on("click", ".one-card", function(e) {
    flip($(this));
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

  // Make the card draggable
  $(".one-card").draggable();

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
// width - the width of the card (in pixel);
// height - the height of the card (in pixel);
// radius - the radius of the round corner; set to 0 if want right angle corners
// id - the id you want to give for this card div
// parentID - the parent element's id you want to append this card div to
function showCard(width, height, radius, id, parentID) {
  // 'one-card' class defines the general style of one card
  // 'flipper', 'flipper-front', 'flipper-back', 'flip', together makes the div flippable
  var html = "<div id='" + id + "-card' class='one-card flipper'>";
  html += "<div id='" + id + "-front' class='one-card-front flipper-front'></div>";
  html += "<div id='" + id + "-back' class='one-card-back flipper-back'></div>";
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
