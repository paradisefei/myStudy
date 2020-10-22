
//引入mongoose
const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema({
	name: String,
	age: Number
});

module.exports = peopleSchema;