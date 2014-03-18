$(function() {

  var availableCards;
  var cardsJson;
  var engine;

  // Configures and starts typeahead - run after ajax populates cards array
  function startTypeahead() {
    engine = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: $.map(availableCards, function(element) { return { value: element.card.name }; })
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

  $.get('/cards.json', function(data) {
    var currentHero = $('#card-search').data('hero');

    var classCards = $.grep(data, function(element) {
      return element.card.hero_id === currentHero || !element.card.hero_id
    });

    cardsJson = availableCards = classCards;
    startTypeahead();
  });

});

