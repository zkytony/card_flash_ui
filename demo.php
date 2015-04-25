<?php 
// This file will be the index page - one that has content showing on it
require_once "view/card_view.php";
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Demo</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/card.css">
    <script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
    <script src="https://code.jquery.com/ui/1.11.3/jquery-ui.js"></script>
  </head>
  <body>
    <div class="whole-wrapper">
      <h1>Demo:</h1>
      <p>Enter width, height, and radius below, the card will change its size and shape accordingly; Click the card to flip it -- Kaiyu</p>
      <p>Thanks to <a href="http://jqueryui.com/draggable/">JQuery UI</a>, you can also drag it around!</p>
      <div class="main-content">
	<!-- This section is a demo for the card div -->
	<p>Width:<input type="text" id="width-field" class="text-field" value="100" pattern="[0-9]+"></p>
	<p>Height:<input type="text" id="height-field" class="text-field" value="60" pattern="[0-9]+"></p>
	<p>Radius:<input type="text" id="radius-field" class="text-field" value="60" pattern="[0-9]+"></p>
    <p>FrontText:<input type="text" id="front-field" class="text-field" value="60" pattern="[0-9]+"></p>
    <p>BackText:<input type="text" id="back-field" class="text-field" value="60" pattern="[0-9]+"></p>
	<button class="btn" id="refresh-btn">Refresh</button>
	<div class="card-div-wrapper" id="card-container-0"></div>
	<script src="script/card.js"></script>
	<script>
	 var width = parseInt($('#width-field').val());
	 var height = parseInt($('#height-field').val());
	 var radius = parseInt($('#radius-field').val());
	 
	 var front = ($('#front-field').val());
	 var back = ($('#back-field').val());
	 

	 showCard(width, height, radius, 'demo', 'card-container-0');
	</script>
      </div>
    </div>
  </body>
</html>
<?php  

?>
