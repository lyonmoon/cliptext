<?php
	$text = $_POST['text'];
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Clipr - Text Sharing</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/png" href="favicon.ico">
  <link rel="stylesheet" type="text/css" href="bower_components/skeleton/css/normalize.css" />
  <link rel="stylesheet" type="text/css" href="bower_components/skeleton/css/skeleton.css" />
  <link rel="stylesheet" href="css/app.css" />
  <link href='//fonts.googleapis.com/css?family=Raleway:400,300,600' rel='stylesheet' type='text/css'>
  <style>
    .footer {
		text-align: left;
	}
  </style>
</head>
<body>
  <!--[if lt IE 7]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->
  <div class="container main">


    <?php echo $text ?>;


  </div>

  <script src="bower_components/jquery/jquery.min.js"></script>
  <script src="js/jquery.simplyCountable.js"></script>
  <?php include('analytics.php'); ?>
</body>
</html>