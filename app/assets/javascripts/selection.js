// backbone js for selection model on drafts page

$(function() {

  var Card = Backbone.Model.extend({

  });

  var Set = Backbone.Collection.extend({
    model: Card
  });

  var CardView = Backbone.View.extend({
    tagName: 'div',
    className: 'card',
    initialize: function() {
      _.bindAll(this, 'render');
    },

    render: function() {
      $(this.el).html('Test')
      return this;
    }
  });

  var SetView = Backbone.View.extend({

    el: $('body'),

    events: {
      'typeahead:selected' : 'selected'
    },

    initialize: function() {
      _.bindAll(this, 'selected', 'appendItem');

      this.collection = new Set();
      this.collection.bind('add', this.appendItem);

      this.count = 0;
    },

    selected: function(e) {
      if (this.count < 3) {
        $('#card-search').val('');
        var card = new Card();
        this.collection.add(card);
      }
    },

    appendItem: function(item) {
      this.count++;
      var cardView = new CardView({
        model: item
      });
      $('#set').append(cardView.render().el);
    }

  });

  var setView = new SetView();

});