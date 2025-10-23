<?php
$conn=mysqli_connect("localhost","root","","boot");
if($conn){
  echo "connected";
}else{
  echo "erroe";
}
?>