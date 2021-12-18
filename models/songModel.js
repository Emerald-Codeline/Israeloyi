 const mongoose = require('mongoose');
 const schema = mongoose.Schema;
 const SongSchema = new schema({

     name: {
         type: String,
         require: true
     },
     songFile: {
         type: String,
         require: true
     },
     songAlbum: {
         type: String,
         require: true
     },
     songLength: {
         type: Number,
         require: true
     },
     featuring: {
         type: String,
         require: true
     },
     producer: {
         type: String,
         require: true
     },
     cost: {
         type: String,
         require: true
     },
     downloads: {
         type: Number,
         default:0,
         required:true
     },
     played: {
         type: Number,
         default:0,
         required:true
     }
     

 });

 module.exports = mongoose.model('Song', SongSchema);