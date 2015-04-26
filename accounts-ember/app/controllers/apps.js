import Ember from 'ember';

export default Ember.Controller.extend({

  newAppName: "new app",

  actions:{
    createApplication: function(){
      var newAppName = this.get('newAppName');
      var newApp = this.store.createRecord('application', {name:newAppName});
      newApp.save();
    }
  }
});
