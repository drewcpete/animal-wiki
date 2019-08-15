$(document).ready(function() {
  $("#animals").change(function(event){
    console.log(".change() fired.")
    var animalName = $("#animals").val().toLowerCase().replace(" ","-");
    // $(".desc").hide();
    // $(".desc").show();
    $("#"+animalName).show();
    event.preventDefault();
  });
});
