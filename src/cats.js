var cats = ['dave', 'henry', 'martha', 'a new one'];
var guys = require("json!./data/guys.json");

// => returns file.json content as json parsed object
module.exports = {cats: cats, guys: guys}