<?php

/****************************************************

* Project Name: FastSQL
* Purpose: Single Page application to control MySQL
* Author: Zach Alam, Etaware LLC
* License: The MIT License (MIT)  -  http://opensource.org/licenses/MIT

****************************************************/

// grab data
$data = file_get_contents("php://input");
$data = json_decode($data);


session_start();
$_SESSION['db'] = $data->db;



?>