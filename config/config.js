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
    db: 'mongodb://localhost/test'
  },

  test: {
    root: rootPath,
    app: {
      name: 'homepage'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/homepage-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'homepage'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/homepage-production'
  }
};

module.exports = config[env];
