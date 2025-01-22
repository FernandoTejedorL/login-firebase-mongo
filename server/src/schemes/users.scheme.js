const mongoose = require('mongoose');

const UserScheme = mongoose.Schema(
  {
    //_id: String, no hay que añadirlo
    email: String,
    profile: String,
  },
  { collection: 'users-collection' }
);

module.exports = UserScheme;
