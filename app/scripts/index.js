var $ = require("jquery");
var Backbone = require("backbone");
var like = require("./models/like");

var likes = new like.Counter();

$(".likes-button").on("click", function(){
  likes.increase();
  console.log(likes.get("count"));
  $(".likes-count").text(likes.get("count") + " " + likes.toJSON().string);
});
