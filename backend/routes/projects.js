const express = require("express");
const router = express.Router();
const schema = require("../schema/projects");
//ver
router.get(("/project"), async(req, res) =>{
    await schema.find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})

module.exports = router