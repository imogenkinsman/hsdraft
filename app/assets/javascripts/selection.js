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

      this.collection = new Set();
      this.collection.bind('add', this.appendItem);

      this.count = 0;
    },

    selected: function(e) {
      if (this.count < 3) {
        var card = new Card();
        this.collection.add(card);
      }
    },

    appendItem: function(item) {
      this.count++;
      var cardView = new CardView({
        model: item
      });
      // append item somewhere on dom
    }

  });

  var setView = new SetView();

});