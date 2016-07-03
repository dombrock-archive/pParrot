<?php
/*///////
/*Creates or opens the table and database used in our app.
/*Change the name of 'main.db' to something more obscure. 
/*Contains empty condidtions for debugging.
/*///////
   class MyDB extends SQLite3
   {
      function __construct()
      {
         $this->open('main.db');
      }
   }
   $db = new MyDB();
   if(!$db){
      echo $db->lastErrorMsg();
   } else {
      //"Opened database successfully"
   }
   $sql =<<<EOF
      CREATE TABLE IF NOT EXISTS POSTS
      (ID INTEGER PRIMARY KEY,
      KEY           TEXT    NOT NULL,
      PASSWORD           TEXT    NOT NULL,
      CONTENT            TEXT     NOT NULL);
EOF;
   $ret = $db->exec($sql);
   if(!$ret){
      echo $db->lastErrorMsg();
   } else {
      //"Table opened successfully"
   }

