<?php

include_once('singlenton/conexion.php');
$db= Database::getInstance();
$cx=$db->getConnection();

$dato= $_POST['dato']; 


$rs= $cx->query("SELECT * FROM usuarios");

while($con=mysqli_fetch_array($rs)){
    echo $con['nombre'];
    echo "<br>";
}
echo "<br>";
echo $dato;



?>