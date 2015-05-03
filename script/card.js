// Script for card div

// called when the html document finishes loading
$(document).ready(function() {
  
  // This function is called when .one-card element is clicked
  // We want to flip the card
  var oneCardWidth = parseInt($(".one-card").width(), 10);
  var oneCardHeight = parseInt($(".one-card").height(), 10);
/*  $(".one-card").hover(
    function() {
      $(this).animate({
	width: oneCardWidth * 1.5 + "px",
	height: oneCardHeight * 1.5 + "px",
      });
    },
    function() {
      $(this).animate({
	width: oneCardWidth + "px",
	height: oneCardHeight + "px",
      });      
    }
  );*/
  $(".one-card").click(function(e) {
    flip($(this));
  });
    
  $(document).on("click", "#flip-to-login-btn", function(e) {
    flip($("#login-form-card"));
  });

  $(document).on("click", "#flip-to-join-btn", function(e) {
    flip($("#login-form-card"));
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

var data = {
    0: {
	front: "<h3>Royal Baby:</h3><p>Catherine gives birth to a girl</p>",
	back: "<img src=\"css/royal-1.jpg\" style=\"width:230px;height:auto\"> <p>London (CNN) It's a princess! That was the happy news on Saturday morning, after the Duchess of Cambridge -- the British royal also known as Catherine -- gave birth to her second child.</p>",
    },
    1: {
	front: "<b>I HAVE A SURPRISE FOR YOU</b>",
	back: "<b>IT'S POOP</b>",
    },
    2: {
	front: "<b>KOOLIO</b>",
	back: "<b>COOL.<br> New Game Changer.</b>",
    },
    3: {
	front: "<div class='video-area'><iframe width='560' height='315' src='https://www.youtube.com/embed/SR6iYWJxHqs' frameborder='0' allowfullscreen style='width:100%; height:auto'></iframe></div>",
	back: "",
    },
    4: {
	front: "<b>しょうじょ</b>",
	back: "<b>girl</b>",
    },
    5: {
	front: "<div class='video-area'><iframe width='420' height='315' src='https://www.youtube.com/embed/Hd_ptbiPoXM' frameborder='0' allowfullscreen style='width:100%; height:auto'></iframe></div>",
	back: "",
    },
    6: {
	front: "<b>Try not to become a man of success, but rather try to become a man of value.</b>",
	back: "<img src='css/einstein.jpg' style=\"width:108%;height:auto\">",
    },
    7: {
	front: "",
	back: "",
    },
    8: {
	front: "",
	back: "",
    },
}

// Read data from given input json file. Convert it into a JS Object
// Need to use the File API
function readCards() {
    for (i in data) {
	if (data.hasOwnProperty(i)) {
	    showCard(data[i].front, data[i].back, 230, 140, 10, "example-" + i, "card-" + i);
	}
    }
}
