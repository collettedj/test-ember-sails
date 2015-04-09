import Base from 'simple-auth/authenticators/base';

export default Base.extend({
  restore: function(data) {
    return Ember.RSVP.resolve({success:true});
  },

  ajaxPromise: function(options) {
    var request = new Ember.RSVP.Promise(function (resolve, reject) {
      options.success = function (response) {
        resolve(response);
      };

      options.error = function (reason) {
        reject(reason);
      };

      return Ember.$.ajax(options);
    });

    return request;
  },


  authenticate: function(options) {
    var self = this;
    return this.ajaxPromise({
        type: "POST",
        url: "https://localhost:1337/auth/local",
        data: options,
        xhrFields: {
          withCredentials: true
        },
        crossDomain: true
      }).then(function(res){
        return {success:true};
      }, function(err){
        return Ember.RSVP.reject(err);
      });


  },

  invalidate: function(data) {
    var self = this;
    return this.ajaxPromise({
      type: "GET",
      url: "https://localhost:1337/logout",
      data: {},
      success: function(){
        return {success:true};
      },
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true
    });
  }
});
