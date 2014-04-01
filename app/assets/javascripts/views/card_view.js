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