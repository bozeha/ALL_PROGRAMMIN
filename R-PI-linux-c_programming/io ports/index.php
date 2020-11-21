<?php
if (isset($_GET["variable"])) {
    if ($_GET["variable"] == 'on')
    {
        system ( "gpio -g mode 18 out" );
        system ( "gpio -g write 18 1" );
    }
    elseif ($_GET["variable"] == 'off')
    {
        system ( "gpio -g mode 18 out" );
        system ( "gpio -g write 18 0" );
    }
    
    elseif ($_GET["variable"] == 'loop')
    {
        system ( "gpio -g mode 18 out" );
        
        for($lop=0;$lop!=10;$lop++)
        {
            system ( "gpio -g write 18 1" );
            sleep(1);
            system ( "gpio -g write 18 0" );
            sleep(1);
        }
    }
    
}

?>

  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <script>
      var current = '';
      //var myval = foo("this is a php variable"); // generated by PHP
      function turnOnOff(myval) {
        window.location.href = "index.php?variable=" + myval;
      }
    </script>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>

  <body>
    <div class='container'>
      <div style='background-color:blue' class='btn' onClick="turnOnOff('on')">
        On
      </div>
      <div style='background-color:red' class='btn' onClick="turnOnOff('off')">
        Off
      </div>
      <div style='background-color:gray' class='btn' onClick="turnOnOff('loop')">
        loop
      </div>
    </div>
<form action="password.php" method="post">
  Enter password: <input type="text" name="pass"><br>
  <input type="submit" value="Submit">
</form>
  </body>

  </html>