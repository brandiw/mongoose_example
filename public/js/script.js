$(document).ready(function(){
  $("#delete-link").click(function(){
    console.log($(this).attr("href"));

    $.ajax({
      url: $(this).attr("href"),
      method: "DELETE"
    }).done(function(res){
      alert("Deleted!");
      window.location.href = "/users";
    });
  });
});
