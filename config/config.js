var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'homepage'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/myportfolio'
  },

  test: {
    root: rootPath,
    app: {
      name: 'homepage'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/myportfolio'
  },

  production: {
    root: rootPath,
    app: {
      name: 'homepage'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/myportfolio'
  }
  
};

module.exports = config[env];
