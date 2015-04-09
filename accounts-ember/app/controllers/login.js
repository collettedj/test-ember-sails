import Ember from 'ember';

export default Ember.Controller.extend({
  email:'collettedj@gmail.com',
  password:'password',
  authError: '',

  hasErrors: function(){
    var authError = this.get('authError');
    return !Ember.isBlank(authError);
  }.property('authError'),

  actions:{
    login:function(){
      var email = this.get('email');
      var password = this.get('password');
      this.get('session').authenticate('authenticator:custom', {identifier: email, password: password});
    }


  }

});
