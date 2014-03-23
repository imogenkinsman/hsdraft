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
      _.bindAll(this, 'selected', 'appendItem', 'startTypeahead');

      this.collection = new Set();
      this.collection.bind('add', this.appendItem);

      this.count = 0;

      var set = this;

      $.get('/cards.json', function(data) {
        var currentHero = $('#card-search').data('hero');

        var classCards = $.grep(data, function(element) {
          return element.card.hero_id === currentHero || !element.card.hero_id
        });

        set.cardsJson = set.availableCards = classCards;
        set.startTypeahead();
      });

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
    },

    // Configures and starts typeahead - run after ajax populates cards array
    startTypeahead: function() {
      engine = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: $.map(this.availableCards, function(element) { return { value: element.card.name }; })
      });

      engine.initialize();

      $('#card-search').typeahead({
          hint: true,
          highlight: true,
          minLength: 1
        },
        {
          name: 'cards',
          displayKey: 'value',
          source: engine.ttAdapter()
        });
    }

  });

  var setView = new SetView();

});