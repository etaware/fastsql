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


if($data->user && $data->pass && $data->serv)
{
	// check connection
	$mysqli = new mysqli($data->serv,$data->user,$data->pass);
	
	if(!mysqli_connect_error())
	{
		// successful login	
		
		// save session vars
		session_start();
		$_SESSION['user'] = $data->user;
		$_SESSION['pass'] = $data->pass;
		$_SESSION['serv'] = $data->serv;
		
		print json_encode(array("success"=>true));
	}
	else print json_encode(array("error"=>"Invalid MySQL Credentials.")); 
} else print json_encode(array("error"=>"MySQL Username, Password, & Server are required."));



?>