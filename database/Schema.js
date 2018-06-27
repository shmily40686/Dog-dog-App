const mongoose = require('mongoose');
const db = require('./index.js');

const userSchema = new mongoose.Schema({
	userName: String,
	userPassword: String,
	userPhoto: String,
	listForSale: [String],
	listForBought: [String]
})

const User = mongoose.model('User', userSchema);

const DogPostInfoSchema = new mongoose.Schema({
	type: String,
	age: {
		year: Number,
		month: Number
	},
	size: String,
	sex: String,
	color: String,
	price: {
		fullPrice: Number,
		deposit: Number
	},
	connect: {
		email: String,
		call: Number
	}
})

const DogPostSchema = new mongoose.Schema({
	title: String,
	creatAt: String,
	info: DogPostInfoSchema,
	view: Number,
	comments:[{
	    user: String,
	    creatAt: String,
	    text: String,
	    reply:[]
   }],
	photo: [String],
	location: {
		street: String,
		city: String,
		state: String,
		zipcode: Number
	},
	description: String
})

const DogPost = mongoose.model('DogPost', DogPostSchema)

module.exports = {
	DogPost: DogPost,
	User: User
}