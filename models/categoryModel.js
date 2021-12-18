const mongoose = require('mongoose');
const schema = mongoose.Schema;
const categorySchema = new schema({
    title: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Category', categorySchema);