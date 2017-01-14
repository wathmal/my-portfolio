var express = require('express'),
  router = express.Router(),
  // mongoose = require('mongoose'),
  _ = require('lodash'),
  // Project = mongoose.model('Project'),
  siteConfig = require('./../../config/site');


module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {

  // split project array in to 3 element chunks
  var projectChunks = _.chunk(_.orderBy(siteConfig.projects,['id'],['desc']), 3);
  var repoChunks = _.chunk(siteConfig.repos, 2);
  // console.log(projectChunks);

  res.render('index', {
    config: JSON.parse(JSON.stringify(siteConfig)),
    projects: projectChunks,
    repos: repoChunks,
  });
});
