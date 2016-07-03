<?php
/*///////
/*Queries the database for info related to the public key.
/*Checks the users password against the hash and confirms it is correct. 
/*Destroys the message that has been read. 
/*In an application like this it is important to NOT give verbose error messages
/*///////
require('connect.php');
$error_msg="Ah ah ah, you didn't say the magic word.";
$_password=$_POST["PASSWORD"];
$_key=$_POST["KEY"];
$sql ="SELECT CONTENT, PASSWORD from POSTS WHERE KEY='$_key';";
$ret = $db->query($sql);
if($row = $ret->fetchArray(SQLITE3_ASSOC) ){
    if (password_verify($_password, $row['PASSWORD'] )) {
      if($row['CONTENT']){
        echo $row['CONTENT'];
        //deletes data that has been read
        $sql_delete="DELETE FROM POSTS WHERE KEY='$_key';";
        $db->exec($sql_delete);
        echo "<p><span class='destruct_msg'>[THIS MESSAGE HAS SELF DESTRUCTED IT WILL NOT BE RETRIEVABLE AGAIN]</span>";
      }
    } 
    else {
      echo $error_msg;
      echo "DEBUG_MESSAGE: Invalid password.";//remove this line it is verbose
    }
}
else{
      echo $error_msg;
}
$db->close();