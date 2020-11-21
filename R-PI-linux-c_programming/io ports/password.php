<?php 

if (isset($_POST["pass"])) {
    if ($_POST["pass"] == 'abc')
    {
        system ( "gpio -g mode 15 out" );
        system ( "gpio -g write 15 1" );
        sleep(5);
        system ( "gpio -g write 15 0" );
    }
}


header( 'Location: index.php' ) ;





?>