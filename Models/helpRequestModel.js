const mongoose = require('mongoose');

const helpRequestSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    urgency: String
});

const HelpRequest = mongoose.model('HelpRequest', helpRequestSchema);

module.exports = HelpRequest;
