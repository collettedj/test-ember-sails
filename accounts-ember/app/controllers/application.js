import Ember from 'ember';

export default Ember.Controller.extend({
  newUser: {firstName:null,lastName:null},

  actions:{
    createUser: function(){
      var newUserObj = this.get('newUser');
      var userRecord = this.store.createRecord('user', newUserObj);
      userRecord.save();
    },

    updateUser: function(user){
      user.save();
    },

    deleteUser:function(user){
      user.destroyRecord();
    },

  }
});
