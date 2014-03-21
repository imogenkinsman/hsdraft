// backbone js for selection model on drafts page

$(function() {

  var Card = Backbone.Model.extend({

  });

  var Set = Backbone.Collection.extend({
    model: Card
  });

  var CardView = Backbone.View.extend({
    tagName: 'li',
    initialize: function() {
      _.bindAll(this, 'render');
    },

    render: function() {
      $(this.el).html('<span>Test</span>')
    }
  });

  var SetView = Backbone.View.extend({

    el: $('body'),

    events: {
      'typeahead:selected' : 'selected'
    },

    initialize: function() {
      _.bindAll(this, 'selected');
    },

    selected: function(e) {
      alert('selected');
    }

  });

  var setView = new SetView();

});