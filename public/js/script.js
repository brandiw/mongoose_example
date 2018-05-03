$(document).ready(function(){
  $("#edit-form").on("submit", function(e){
    e.preventDefault();

    console.log($(this).attr("action"));
    console.log($(this).serialize());

    $.ajax({
      url: $(this).attr("action"),
      method: "PUT",
      data: $(this).serialize()
    }).done(function(res){
      alert("edited!");
      window.location.href = "/users";
    });
  });

  $(".delete-link").click(function(e){
    e.preventDefault();
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
