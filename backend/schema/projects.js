const mongoose = require("mongoose");

const SchemaProjects = new mongoose.Schema({
    
    name: {
        type: String,
    },
    description: {
        type: String, 
    }
})

module.exports = mongoose.model('Project', SchemaProjects)