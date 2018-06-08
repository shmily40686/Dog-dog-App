const mongoose = require('mongoose');
const db = require('./index.js');

const userSchema = new mongoose.Schema({
	userName: String,
	userPassword: String,
	listForSale: [String],
	listForBought: [String]
})

const User = mongoose.model('User', userSchema);

const DogPostSchema = new mongoose.Schema({
	title: String,
	info: {
		type: String,
		age: {
			year: Number,
			month: Number
		},
		size: String,
		sex: String,
		color: String
		price: {
			fullPrice: Number,
			deposit: Number
		},
		connect: {
			email: String,
			call: Number
		}

	},
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