var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'Passport', via: 'user' },
    applications : { collection: 'ApplicationUser', via: 'application' },
    firstname: 'string',
    lastname: 'string'
  }
};

module.exports = User;
