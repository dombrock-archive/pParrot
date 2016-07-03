<?php
/*///////
/*
/*
/*///////
require('connect.php');
$_content=$_POST["CONTENT"];
if(!$_content){
  echo "Needs some content first.";
  return;
}
$_content = filter_var($_content,FILTER_SANITIZE_SPECIAL_CHARS);
$_password=$_POST["PASSWORD"];
if(!$_password){
  echo "Needs a password.";
  return;
}
$_key_length=$_POST["KL"];
if(!$_key_length){
  $_key_length=25;
}
$key = get_key($_key_length);
$hash = password_hash($_password, PASSWORD_DEFAULT);
$sql ="INSERT INTO POSTS (ID,KEY,PASSWORD,CONTENT)
      VALUES (NULL, '$key','$hash','$_content');";
 $ret = $db->exec($sql);
 if(!$ret){
    echo $db->lastErrorMsg();
 } 
 else {
    echo "GENERATED & SAVED SUCCESSFULLY WITH PUBLIC KEY:<br><span class='public_key'> \"".$key."\"</span><br>";
    echo "PASSWORD SALTED, HASHED & SAVED SUCCESSFULLY AS: \"".$hash."\"<br>";
 }
$db->close();
function get_key($length){
  for ($i = 1; $i <= $length; $i++) {
    $_key[]=rand(0, 10);
  } 
  return implode("", $_key);
}
