<?php

/****************************************************

* Project Name: FastSQL
* Purpose: Single Page application to control MySQL
* Author: Zach Alam, Etaware LLC
* License: The MIT License (MIT)  -  http://opensource.org/licenses/MIT

****************************************************/

session_start();

print json_encode(array("db" => $_SESSION['db']));



?>
