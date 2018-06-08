const db  = require('./index.js');
const User = require('./Schema.js');


const sampleUser = [
	userName: Frog,
	userPassword: "0918199o",
	listForSale: [],
	listForBought: []
]

const samplePost = [
	title: "cute border collie looking for new home",
	info: {
		type: "Border Collie",
		age: {
			year: 1,
			month: 4
		},
		size: "middle",
		sex: "female",
		color: "black and white"
		price: {
			fullPrice: 1500,
			deposit: 500
		},
		connect: {
			email: "shmily40686@gmail.com",
			call: 4155190071
		}
		
	},
	photo: [
			"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12235955/Border-Collie-On-White-02.jpg",
			"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12235957/Border-Collie-On-White-01.jpg",
			"https://static.iris.net.co/4patas/upload/images/2015/8/31/1253_10281_1.jpg",
			"https://www.petbarn.com.au/petspot/wp-content/uploads/2014/01/19.-Border-Collie.jpg",
			"https://vetstreet.brightspotcdn.com/dims4/default/5d9d95a/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fc3%2F54ed80c75711e0a5640050568d6ceb%2Ffile%2FBorder-Collie-3-645mk062411.jpg",

	],
	location: {
		street: "16243 Miramar Pl",
		city: "San Leandro",
		state: "CA",
		zipcode: 94578
	},
	description: "Registered 1 year old Border Collie. She is registered a miniature but got to big. She weighs around 45 pounds. She is a good dog but would do better with older kids or adults.  She knows basic commands and is house broke. we need move out the courty, so we cannot bring her with us, Would love for someone to enjoy her. "
]

const insertSamplePost = function() {
  User.create(samplePost)
    .then(() => db.disconnect());
};

const insertSampleUser = function() {
  User.create(sampleUser)
    .then(() => db.disconnect());
};


insertSampleUser();
insertSampleSale();