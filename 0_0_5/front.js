$info_text = "pParrot is an open source secure messaging platform. It works but first entering a message and password into the database. Once the message has been entered and saved it will respond by giving you a \"Public Key\" for your post. You will need to find a secure way to communicate the message password to the recipient. I suggest a face to face conversation. <p>Then you will send your public key to the recipient.  They will use the key along with the password to retrieve the message from the database. Once the message has been retrieved from the database it will be destroyed. However, it will otherwise stay in the database indefinitely, until it is read and thusly deleted. <p>Due to the length and random nature of the public keys, it will be very difficult to \"brute force\" your way into discovering notes. To increase security, use a longer key length. You can change the key length by altering the third (numerical) value on the \"write\" menu. <p>Even if someone were to discover your conversation filled with random numerical strings, and even if they interrogated the password(s) out of you there would be no reasonable way to retrieve the messages that have already been transmitted. You may also be alerted to some kind of message interception if the messages are no longer available to the intended recipient, even though they are using accurate credentials. <p>Also, since the key is not a form of encryption and does not contain your message in any way shape or form, the key contains no useful information. Once it has been used there is no way to retrieve the message without access to the specific software and database installation that the message was saved on. <p>Passwords are thoroughly salted and hashed using the latest techniques available. However, I suggest using some kind of third party encryption software before saving your messages into the database. This will add an extra layer of security and will avoid saving your messages in plain text while they are waiting to be read. I also suggest using this tool over proxies or the TOR network since the server may still be keeping IP addresses in the access log.<p><p><i> \"If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.\"</i><br>- Henry David Thoreau, Walden ";


  $("#write_message_btn").click(function(){
    
    $write_content = $("#write_content").val();
    $write_password = $("#write_password").val();
    $write_kl = $("#write_kl").val();
    $.post("write.php", {"CONTENT": $write_content, "PASSWORD": $write_password, "KL": $write_kl}, function(result){
      //should be one function
        $("#message_area").hide("slow", function() {
          $("#message_area").html(result);
          $("#message_area").show('slow');
        });
    });
  });
  $("#read_message_btn").click(function(){
    $read_key = $("#read_key").val();
    $read_password = $("#read_password").val();
    $.post("read.php", {"KEY": $read_key, "PASSWORD": $read_password}, function(result){
       //should be one function
        $("#message_area").hide("slow", function() {
          $("#message_area").html(result);
          $("#message_area").show('slow');
        });
    });
  });
  //init
  $("#READ").hide();
  $("#WRITE").hide();
  
  $("#start_read_btn").click(function(){
    $("#start_read_btn").addClass("active_btn");
    $("#start_write_btn").removeClass("active_btn");
    $("#WRITE").fadeOut("slow", function() {
      $("#READ").fadeIn("slow");
    });
  });
  $("#start_write_btn").click(function(){
    $("#start_write_btn").addClass("active_btn");
    $("#start_read_btn").removeClass("active_btn");
    $("#READ").fadeOut("slow", function() {
      $("#WRITE").fadeIn("slow");
    });
  });
  $("#info_btn").click(function(){
    $("#start_read_btn").removeClass("active_btn");
    $("#start_write_btn").removeClass("active_btn");
    $("#message_area").hide("slow", function() {
          $("#message_area").html($info_text);
          $("#message_area").show('slow');
    });
  });
  $("#logo").click(function(){
    $("#start_read_btn").removeClass("active_btn");
    $("#start_write_btn").removeClass("active_btn");
    $("#message_area").toggle("fast");
    //$("#logo").toggleClass("flip");
  });
  $("#source_btn").click(function(){
    alert("Coming To GITHUB Soon!");
  });

