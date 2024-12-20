$(document).ready(function(){
  $("#btn").click(function(){
    $("#hello").css("background-color", "yellow")
                .css("color","green")
                .animate({
                  // left: '250px',
                  opacity: '0.1',
                  height: '150px',
                  width: '300px'
                });
  })
})