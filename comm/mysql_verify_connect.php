<?php

/****************************************************

* Project Name: FastSQL
* Purpose: Single Page application to control MySQL
* Author: Zach Alam, Etaware LLC
* License: The MIT License (MIT)  -  http://opensource.org/licenses/MIT

****************************************************/

session_start();

// start a mysqli connection
if($_SESSION['db']) $mysqli = new mysqli($_SESSION['serv'],$_SESSION['user'],$_SESSION['pass'],$_SESSION['db']);
else $mysqli = new mysqli($_SESSION['serv'],$_SESSION['user'],$_SESSION['pass']);



?>