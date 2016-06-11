// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  title: String,
  url: String,
  image: String,
  technologies: [String],
  date: {type: Date, default: Date.now}
});

mongoose.model('Project', ProjectSchema);

