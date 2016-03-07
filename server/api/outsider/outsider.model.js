'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var OutsiderSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Outsider', OutsiderSchema);
