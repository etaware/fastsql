<?php

/****************************************************

* Project Name: FastSQL
* Purpose: Single Page application to control MySQL
* Author: Zach Alam, Etaware LLC
* License: The MIT License (MIT)  -  http://opensource.org/licenses/MIT

****************************************************/

require_once("mysql_verify_connect.php");

$result = $mysqli->query("show databases");

while($row = $result->fetch_assoc())
{
	$list_dbs[] = $row['Database'];	
}

print json_encode($list_dbs);

?>
