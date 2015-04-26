import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    updateApplication: function(){
      var app = this.get('model');
      app.save();
    },

    deleteApplication: function(){
      var app = this.get('model');
      app.destroyRecord();
    }

  }
});
