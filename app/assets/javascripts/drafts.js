$(function() {

  var cards = ['sdfddf', 'asdf', 'assdf']

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
});

