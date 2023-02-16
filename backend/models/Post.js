const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({

        posti:{
            type: String,
            require: true
        },
        comment:[{

            type: String,
            require:false
        }]
        ,
        timestamp:{
            type:Date,
            default:Date.now
        }
  });

  module.exports = mongoose.model('Post', PostSchema)