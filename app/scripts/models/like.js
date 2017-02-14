var $ = require("jquery");
var Backbone = require("backbone");

var Counter = Backbone.Model.extend({
  initialize: function(){
    console.log("Model made");
  },
  defaults: {
    count : 0,
    label: 'Like',
    plural: 's'
  },

  increase: function(){
    var i = this.get("count") + 1;
    this.set({count : i});
  },
  toJSON: function(){
    //From the review - 2-14-2017
    var data = Backbone.Model.prototype.toJSON.call(this);
    var j = this.get('count');
    data.string = this.get('label') + ((j === 1) ? "" : this.get('plural'));
    console.log(data);
    return data;
    // if (this.get("count") === 1 ){
    //   return " Like";
    // } else {
    //   return " Likes";
    // }
  }
});

module.exports = {
  'Counter' : Counter
};
