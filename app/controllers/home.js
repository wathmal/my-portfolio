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
  /*Project.find(function (err, projects) {
    if (err) return next(err);
    res.render('index', {
      title: 'wathmal\'s',
      projects: projects
    });
  });*/
  // split project array in to 3 element chunks
  var projectChunks = _.chunk(_.orderBy(siteConfig.projects,['id'],['desc']), 3);
  var repoChunks = _.chunk(siteConfig.repos, 3);
  // console.log(projectChunks);

  res.render('index', {
    config: JSON.parse(JSON.stringify(siteConfig)),
    projects: projectChunks,
    repos: repoChunks
  });
});
