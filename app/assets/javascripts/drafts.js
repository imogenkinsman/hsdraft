$(function() {

  var cards = [];

  // Configures and starts typeahead - run after ajax populates cards array
  function startTypeahead() {
    var engine = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: $.map(cards, function(card) { return { value: card }; })
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
    $.each(data, function(_, item) {
      cards.push(item.card.name);
    });

    startTypeahead();
  });

});

