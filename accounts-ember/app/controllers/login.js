import Ember from 'ember';

export default Ember.Controller.extend({
  email:'',
  password:'',
  actions:{
    login:function(){
      var email = this.get('email');
      var password = this.get('password');
      $.ajax({
          type: "POST",
          url: "https://localhost:1337/auth/local",
          data: {identifier: email, password: password}
        });
    }
  }

});
