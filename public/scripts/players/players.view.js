(function() {
  window.PlayersView = Backbone.View.extend({
    initialize: function() {
      _.bindAll(this, 'add', 'reset');
      this.reset = _.throttle(this.reset, 1000);
      return this.collection.bind('all', this.reset);
    },
    reset: function() {
      this.el.innerHTML = '';
      return this.collection.each(this.add);
    },
    add: function(model) {
      var view;
      view = new PlayerView({
        model: model
      });
      model.view = view;
      if (model.get('self')) {
        $(this.el).prepend(view.render().el);
        return;
      }
      return $(this.el).append(view.render().el);
    }
  });
}).call(this);
