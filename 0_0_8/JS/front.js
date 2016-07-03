
$.get( "INFO/info.txt", function( data ) {
  $info_text = data;
});

  $("#write_message_btn").click(function(){
    
    $write_content = $("#write_content").val();
    $write_password = $("#write_password").val();
    $write_kl = $("#write_kl").val();
    $.post("./PHP/write.php", {"CONTENT": $write_content, "PASSWORD": $write_password, "KL": $write_kl}, function(result){
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
    $.post("./PHP/read.php", {"KEY": $read_key, "PASSWORD": $read_password}, function(result){
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
  $("#api_btn").click(function(){
    alert("Coming To GITHUB Soon!");
  });
  $("#noJS_btn").click(function(){
    alert("Coming Soon!");
  });


