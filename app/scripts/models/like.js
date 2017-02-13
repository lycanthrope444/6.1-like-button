var $ = require("jquery");
var Backbone = require("backbone");

var Counter = Backbone.Model.extend({
  initialize: function(){
    console.log("Model made");
  },
  defaults: {
    count : 0
  },

  increase: function(){
    var i = this.get("count") + 1;
    this.set({count : i});
  },
  toJSON: function(){
    if (this.get("count") === 1 ){
      return " Like";
    } else {
      return " Likes";
    }
  }
});

module.exports = {
  'Counter' : Counter
};
