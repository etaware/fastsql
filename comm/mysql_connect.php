<?php

/****************************************************

* Project Name: FastSQL
* Purpose: To make routine modifications to databases under the control of MySQL.
* Author: Zach Alam, Etaware LLC
* License: The MIT License (MIT)  -  http://opensource.org/licenses/MIT

****************************************************/

// grab data
$data = file_get_contents("php://input");
$data = json_decode($data);


// expects 3 paramaters
$user = $data->user;
$pass = $data->pass;
$serv = $data->serv;


if($user && $pass && $serv)
{
	// check connection
	$mysqli = new mysqli($serv,$user,$pass);
	
	if(!mysqli_connect_error())
	{
		// save session vars
		print json_encode(array("success"=>true));
	}
	else print json_encode(array("error"=>"Invalid MySQL Credentials.")); 
} else print json_encode(array("error"=>"Missing Connection Variables."));



?>