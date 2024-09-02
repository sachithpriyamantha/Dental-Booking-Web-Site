const mongoose = require('mongoose');

const dentistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    spec: { type: String, required: true },
    description: { type: String },
    image: { type: String }
});

const dentistModel = mongoose.model("dentists",dentistSchema);
module.exports = dentistModel;
