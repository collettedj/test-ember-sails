/**
* ApplicationUser.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    application: { model: 'Application', required: true, foreignKey: true, index:true },
    user: { model: 'User', required: true, foreignKey: true, index:true }

  }
};

