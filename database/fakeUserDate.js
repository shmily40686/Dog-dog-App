const db  = require('./index.js');
const { User, DogPost } = require('./Schema.js');
const bcrypt = require('bcryptjs');

var password = "0918199o"
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync(password, salt);

const sampleUser = {
	userName: 'Frog',
	userPassword: hash,
  userPhoto: "https://yt3.ggpht.com/-9XgVrCusljo/AAAAAAAAAAI/AAAAAAAAAAA/7caPJOvNfL0/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
	listForSale: [],
	listForBought: [],
}

const samplePost = [
	{
   title: "cute dog needs new home",
   creatAt:'Thu Jun 14 2018 10:52:57 GMT-0700 (PDT)',
   info: {
    type: "Lab",
    age: {
     year: 0,
     month: 2
    },
    size: "Small",
    sex: "male",
    color: "white",
    price: {
     fullPrice: 2500,
     deposit: 1000
    },
    connect: {
     email: "erat@enim.co.uk",
     call: 4513515846
    }

   },
   view: 26,
   comments:[{
    user: 'Frog',
    creatAt:'Thu Jun 14 2018 13:52:57 GMT-0700 (PDT)',
    text: "this dog so cute!",
    reply:[]
   }],
   photo: [
     "https://i.pinimg.com/originals/10/e3/d7/10e3d717d924e9181bda78dcd3f5cc12.jpg",
     "http://dogperday.com/wp-content/uploads/2016/02/dpd-yellow-lab-pup.jpg",
     "https://01iajxoiw1-flywheel.netdna-ssl.com/wp-content/uploads/2012/07/yellow-labrador-puppy.jpg",
     "https://i.pinimg.com/736x/88/02/ae/8802aec84ff0970ed4321ba93a87ee86--labrador-puppies-labrador-retrievers.jpg",
     "https://01iajxoiw1-flywheel.netdna-ssl.com/wp-content/uploads/2017/12/goldador.jpg",
     "https://www.labradortraininghq.com/wp-content/uploads/2016/03/NILIF-with-a-puppy-1.jpg"

   ],
   location: {
    street: "15231 GALT ST",
    city: "San Leandro",
    state: "CA",
    zipcode: 94579
   },
 description: "New born puppy ,Really lovable dog. Super friendly and kind to tennis balls.The Labrador Retriever learns very quickly and loves to work for its handler. Leash training is recommended when young. The Labrador Retriever is capable of learning a wide variety of dog sports including Frisbee and Flyball."
},
{
 title: "smart dog make your life more easy",
 creatAt:'Thu Jun 10 2018 13:52:57 GMT-0700 (PDT)',
 info: {
  type: "black lab",
  age: {
   year: 1,
   month: 7
  },
  size: "Large",
  sex: "female",
  color: "brown",
  price: {
   fullPrice: 1000,
   deposit: 500
  },
  connect: {
   email: "malesuada.fames@egetipsumDonec.co.uk",
   call: 5262140040
  }

 },
 view: 865,
 comments:[{
  user: 'Frog',
  creatAt:'Thu Jun 14 2018 13:52:57 GMT-0700 (PDT)',
  text: "this dog so cute!",
  reply:[]
 }],
 photo: [
   "https://www.mbuchholz.com/photoblog/pictures/2012/05/20120521-_DSC7510.jpg",
   "http://farm4.static.flickr.com/3023/3105578452_d972c0b782.jpg",
   "http://cdn1.foap.com/images/a22078fe-6cc7-4196-89d0-dcd773764f9f/w640.jpg?1431889073"

 ],
 location: {
  street: "3570 Somerset Ave",
  city: "Castro Valley",
  state: "CA",
  zipcode: 94546
 },
 description: "The Labrador Retriever (also known as the ‘Labrador’ or ’Lab’) descends from the Newfoundland Dog and the St. John’s Water Dog in Newfoundland, Canada. It was bred to hunt in water and pull boats, which is evident to this day in its natural love for water. Contrary to popular opinion, the Labrador Retriever’s name likely derives from the Portuguese ‘lavradores’ or Spanish ‘labradores’, both of which mean ‘farm worker’, rather than the ‘Labrador’ region of Canada. The Labrador Retriever was recognized by the American Kennel Club in 1917 and thereafter rose slowly but steadily in popularity due to its incredible versatility, obedience, and rugged good looks. It is now considered the world’s most popular breed. The Labrador Retriever has been the most registered dog in America and England since 1991; the American Kennel Club had almost three times as many Labrador Retriever registrations in 2006 (124,000) as the second most popular breed. Famous Labrador Retrievers include the title character from the film version of ‘Old Yeller’ (though the book version was a Mountain Cur), Marley, from the bestselling memoir ‘Marley and Me’, and Tawny, a yellow Lab who gave birth to 18 puppies with her first litter in 1999 and was named the ‘Iams Mother of the Year’"
},
{
 title: "A warm big dog is waiting for new family!",
 creatAt:'Thu Jun 1 2018 10:52:57 GMT-0700 (PDT)',
 info: {
  type: "golden lab",
  age: {
   year: 3,
   month: 2
  },
  size: "Middle",
  sex: "female",
  color: "golden",
  price: {
   fullPrice: 800,
   deposit: 300
  },
  connect: {
   email: "s6@gmail.com",
   call: 8377461414
  }

 },
 view: 11,
 comments:[{
  user: 'Frog',
  creatAt:'Thu Jun 14 2018 13:52:57 GMT-0700 (PDT)',
  text: "this dog so cute!",
  reply:[]
 }],
 photo: [
   "https://www.thelabradorretriever.com/wp-content/uploads/2015/11/Labrador_Retrievers_yellow_and_red.jpg",
   "https://www.dogbreedinfo.com/images15/GoldenLabradorSmorreFish.jpg",
   "https://www.ara.cat/2011/02/04/societat/gosllaurador_421167959_15723609_800x600.jpg",

 ],
 location: {
  street: "1469 156th Ave",
  city: "San Leandro",
  state: "CA",
  zipcode: 94578
 },
 description: "We are really tired of our dog eating our furniture. hope you can make her better,AKC.yellow lab female puppy..she is so lovable an healthy..she will make you an excellen puppy..shots and wormed.health cert.ready to go.. "
},
{
 title: "springer spaniel",
 creatAt:'Thu Jun 2 2018 13:52:57 GMT-0700 (PDT)',
 info: {
  type: "Border Collie",
  age: {
   year: 4,
   month: 1
  },
  size: "Small",
  sex: "female",
  color: "brown and white",
  price: {
   fullPrice: 600,
   deposit: 0
  },
  connect: {
   email: "Cum.sociis.natoque@liberoDonecconsectetuer.edu",
   call: 7367664686
  }

 },
 view: 99,
 comments:[{
  user: 'Frog',
  creatAt:'Thu Jun 14 2018 13:52:57 GMT-0700 (PDT)',
  text: "this dog so cute!",
  reply:[]
 }],
 photo: [
   "http://www.ashgi.org/wp-content/uploads/2013/09/Aussie-yellow-Waterman-1.jpg",
   "https://i.pinimg.com/originals/cf/e8/d1/cfe8d1bcced66fdf79011822e8c1e628.jpg",
   "https://www.mwbcr.org/wp-content/uploads/2016/09/RED-e1473380241204-325x307.jpg",
   "https://upload.wikimedia.org/wikipedia/commons/3/30/Redtriaussie01.jpg"

 ],
 location: {
  street: "21235 Tyee St",
  city: "Hayward",
  state: "CA",
  zipcode: 94546
 },
 description: "Buddy is the pick of the litter! He is a tri-color with soft long hair. He never cries and he loves to cuddle. He will easily fall asleep on his back while in your arms. He will be ready to leave his mother on 6/19/2018."
},
{
 title: "furry dog",
 creatAt:'Thu Jun 4 2018 13:52:57 GMT-0700 (PDT)',
 info: {
  type: "cocker spaniel",
  age: {
   year: 8,
   month: 7
  },
  size: "Large",
  sex: "male",
  color: "brown",
  price: {
   fullPrice: 1200,
   deposit: 500
  },
  connect: {
   email: "quam.quis@Suspendissesagittis.org",
   call: 199483380
  }

 },
 view: 49,
 comments:[{
  user: 'Frog',
  creatAt:'Thu Jun 14 2018 13:52:57 GMT-0700 (PDT)',
  text: "this dog so cute!",
  reply:[]
 }],
 photo: [
    "https://www.warrenphotographic.co.uk/photography/bigs/38323-Cute-Golden-Cocker-Spaniel-puppy-and-yellow-Guinea-pig-white-background.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8cuRs5Mb39RS1evGLncDfiKC48cHptbLX0QEcDRanz94Ax-4w",
    "https://pawster.com/wp-content/uploads/2017/09/Fotolia_142182113_S.jpg",
    "https://thumbs.dreamstime.com/b/spaniel-de-cocker-americano-do-filhote-de-cachorro-2329387.jpg",
    "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213231/Cocker-Spaniel-on-White-11.jpg",
    "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/16105011/English-Cocker-Spaniel-Slide03.jpg"
 ],
 location: {
  street: "19661 San Miguel Ave",
  city: "Castro Valley",
  state: "CA",
  zipcode: 94546
 },
 description: "Beautiful Black/Tan female born October 11, 2017.Personality PLUS! She is so cute and playful , yet loves to cuddle. We are AKC Breeders of Merit with 40+ AKC homebred owner handled Champions and 40+ yrs experience showing Cocker Spaniels. Please visit your web site at www.crescentmooncockers.com and read our buyer reviews here on puppyfind. We look forward to hearing from you.!"
},
{
 title: "lovely dog",
 creatAt:'Thu Jun 5 2018 12:52:57 GMT-0700 (PDT)',
 info: {
  type: "pit bull",
  age: {
   year: 9,
   month: 2
  },
  size: "Large",
  sex: "female",
  color: "black",
  price: {
   fullPrice: 400,
   deposit: 100
  },
  connect: {
   email: "venenatis@egetdictumplacerat.com",
   call: 9966495259
  }

 },
 view: 1098,
 comments:[{
  user: 'Frog',
  creatAt:'Thu Jun 14 2018 13:52:57 GMT-0700 (PDT)',
  text: "this dog so cute!",
  reply:[]
 }],
 photo: [
  "https://d16ee5lo1src82.cloudfront.net/media/default/images/american_pitbull_dog.jpg",
  "http://static-41.sinclairstoryline.com/resources/media/19b596c7-e219-4750-8d1b-2fd6bc918fa9-large16x9_171211_kima_pit_bull_romeo_1200.jpg?1513009967897",
  "https://www.petmd.com/sites/default/files/liftedpitbullban.jpg"
 ],
 location: {
  street: "658 Cherry Way",
  city: "Hayward",
  state: "CA",
  zipcode: 94541
 },
 description: "The American Pit Bull Terrier needs plenty of exercise. It enjoys running alongside a bicycle or catching a ball or Frisbee. It also enjoys playing fetch. The American Pit Bull Terrier can live in an apartment as long as sufficient attention and exercise is provided."
},
{
 title: "hungry dog",
 creatAt:'Thu Jun 8 2018 22:52:57 GMT-0700 (PDT)',
 info: {
  type: "siberian husky",
  age: {
   year: 6,
   month: 7
  },
  size: "Large",
  sex: "male",
  color: "black and white",
  price: {
   fullPrice: 1100,
   deposit: 400
  },
  connect: {
   email: "sit@nunc.ca",
   call: 4815760927
  }

 },
 view: 31,
 comments:[{
  user: 'Frog',
  creatAt:'Thu Jun 14 2018 13:52:57 GMT-0700 (PDT)',
  text: "this dog so cute!",
  reply:[]
 }],
 photo: [
    "https://vignette.wikia.nocookie.net/gameofthrones/images/0/05/%D0%A5%D0%B0%D1%81%D0%BA%D0%B8.jpg/revision/latest?cb=20171028191831&path-prefix=ru",
    "https://cdn.theatlantic.com/assets/media/img/photo/2016/01/the-huskies-of-aviemore/h01_505658974/main_900.jpg?1453230898",
    "https://i.pinimg.com/originals/58/22/b5/5822b5d0cb2a69563479597cb99a7e62.jpg",
    "https://d2kwjcq8j5htsz.cloudfront.net/1970/01/16111515/siberian-husky-woods-shutterstock_558432511.jpg",
    "https://cmeimg-a.akamaihd.net/640/cme/cuteness_data/s3fs-public/diy_blog/Do-Huskies-Get-Along-Well-With-Other-Animals.jpg"
 ],
 location: {
  street: "14721 Western Ave",
  city: "San Leandro",
  state: "CA",
  zipcode: 94578
 },
 description: "If you love being active, you will love this dog! Loves outdoors and going for walks."
},
{
 title: "fat dog",
 info: {
  type: "Border Collie",
  age: {
   year: 0,
   month: 4
  },
  size: "Small",
  sex: "female",
  color: "black and white",
  price: {
   fullPrice: 9999,
   deposit: 500
  },
  connect: {
   email: "breeder4hire@gmail.com",
   call: 995572837
  }

 },
 view: 876,
 comments:[{
  user: 'Frog',
  creatAt:'Thu Jun 14 2018 13:52:57 GMT-0700 (PDT)',
  text: "this dog so cute!",
  reply:[]
 }],
 photo: [
    "https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2017/10/Rusty-M1.jpg",
    "https://orig00.deviantart.net/14c2/f/2012/112/4/a/my_border_collie_puppy_max_by_rocco_kreuzer-d4x8yl2.jpg",
    "https://previews.123rf.com/images/brusnik/brusnik1604/brusnik160400003/55810141-cute-border-collie-puppy-on-a-white-background.jpg"
 ],
 location: {
  street: "3277 BARLOW DR",
  city: "Castro Valley",
  state: "CA",
  zipcode: 94546
 },
 description: "Certified pure-blood, and can even see ghosts! Will protect you and your family for food!"
},
{
 title: "pure chihuahua is ready for you",
 creatAt:'Thu Jun 11 2018 19:52:57 GMT-0700 (PDT)',
 info: {
  type: "chihuahua",
  age: {
   year: 0,
   month: 3
  },
  size: "Small",
  sex: "male",
  color: "tan",
  price: {
   fullPrice: 100,
   deposit: 50
  },
  connect: {
   email: "nibh.vulputate.mauris@ullamcorperDuisat.ca",
   call: 6663331524
  }

 },
 view: 765,
 comments:[{
  user: 'Frog',
  creatAt:'Thu Jun 14 2018 13:52:57 GMT-0700 (PDT)',
  text: "this dog so cute!",
  reply:[]
 }],
 photo: [
    "http://www.petcollectionworld.com/wp-content/uploads/2012/06/Chihuahua-Puppies.jpg",
    "https://cmeimg-a.akamaihd.net/640/photos.demandstudios.com/getty/article/94/30/156461622.jpg",
    "https://3.bp.blogspot.com/-BYz3RqmTESM/UyH1I29KolI/AAAAAAAAO38/PgoUVKVcDlI/s1600/mini-chihuahua-puppies-1.jpg",
    "https://i.imgur.com/Ga8XDkD.jpg"
 ],
 location: {
  street: "959 CASTLE ST",
  city: "San Leandro",
  state: "CA",
  zipcode: 94578
 },
 description: "Handesome short coat cream male. Sweet tempered and well socialized with people, pets and children daily. Raised with tender love and care in our home. Parents have excellent temperaments and personalities. We are looking for an amazing pet home to spoil him rotten! The deposit is $500 to place Timmy on hold until ready to go. We also accept credit cards, Visa, MasterCard, Discover, American Express and Discover through Square Up with 2.75% extra charge. Shipping is an additional $300 which includes a vet exam, health certificate, health record, vaccinations, dewormings and travel crate. You are welcome to come see us before you buy or FaceTime/Skype video chat to meet your puppy."
},
{
 title: "slobbery dog",
 creatAt:'Thu Jun 9 2018 13:52:57 GMT-0700 (PDT)',
 info: {
  type: "autralian shepherd",
  age: {
   year: 4,
   month: 1
  },
  size: "Middle",
  sex: "female",
  color: "tan and white",
  price: {
   fullPrice: 1500,
   deposit: 500
  },
  connect: {
   email: "pretium.neque@ut.co.uk",
   call: 4274990916
  }

 },
 view: 20,
 comments:[{
  user: 'Frog',
  creatAt:'Thu Jun 14 2018 13:52:57 GMT-0700 (PDT)',
  text: "this dog so cute!",
  reply:[]
 }],
 photo: [
    "https://canna-pet.com/wp-content/uploads/2017/06/australian-shepherd-health-problems_canna-pet-1024x684.jpg",
    "https://vetstreet.brightspotcdn.com/dims4/default/d5e8451/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F6b%2F4a%2F95942b2b42269144fc87f33bd93e%2Faustralian-shepherd-ap-kfqkvx-645-x-380.jpg",
    "https://img.buzzfeed.com/buzzfeed-static/static/2017-02/24/5/asset/buzzfeed-prod-fastlane-02/sub-buzz-1968-1487931877-7.jpg?downsize=715:*&output-format=auto&output-quality=auto",
    "https://list25.com/wp-content/uploads/2017/06/25-5-610x398.jpg"
 ],
 location: {
  street: "730 W Sunset Blvd",
  city: "Hayward",
  state: "CA",
  zipcode: 94541
 },
 description: "Certified blind-seeing eye dog, will help you get from A to B in style!"
},
	{
		title: "cute border collie looking for new home",
    creatAt:'Thu Jun 14 2018 00:52:57 GMT-0700 (PDT)',
		info: {
			type: "Border Collie",
			age: {
				year: 1,
				month: 4
			},
			size: "Middle",
			sex: "female",
			color: "black and white",
			price: {
				fullPrice: 1500,
				deposit: 500
			},
			connect: {
				email: "shmily40686@gmail.com",
				call: 4155190071
			}
			
		},
		view: 0,
		comments:[{
      user: 'Frog',
      creatAt:'Thu Jun 14 2018 13:52:57 GMT-0700 (PDT)',
      text: "this dog so cute!",
      reply:[]
    }],
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
	},

    {
    title: "do you wana have snow white ?Spitz will make it to be true",
    creatAt:'Thu Jun 14 2018 13:11:57 GMT-0700 (PDT)',
    info: {
      type: "Spitz",
      age: {
        year: 0,
        month: 7
      },
      size: "Small",
      sex: "female",
      color: "white",
      price: {
        fullPrice: 1500,
        deposit: 500
      },
      connect: {
        email: "yashu@gmail.com",
        call: 4155010000
      }
      
    },
    view: 0,
    comments:[{
      user: 'Frog',
      creatAt:'Thu Jun 14 2018 13:52:57 GMT-0700 (PDT)',
      text: "this dog so cute!",
      reply:[]
    }],
    photo: [
      "http://www.curtamais.com.br/uploads/conteudos/c3a9b36d2b70e47b09a984f499995952.jpg",
      "https://i.pinimg.com/originals/73/59/4a/73594a2ee9a4aedfb6f8d090cfe8b759.jpg",
      "http://elelur.com/data_images/dog-breeds/japanese-spitz/japanese-spitz-06.jpg"
    ],
    location: {
      street: "15231 GALT ST",
      city: "San Leandro",
      state: "CA",
      zipcode: 94579
    },
    description: "This breed gets along well with other dogs, as well as children. It will bark when visitors come around"
  },

      {
    title: "the most popular dog! corgi!",
    creatAt:'Thu Jun 14 2018 11:52:57 GMT-0700 (PDT)',
    info: {
      type: "corgi",
      age: {
        year: 2,
        month: 6
      },
      size: "Small",
      sex: "male",
      color: "white",
      price: {
        fullPrice: 1500,
        deposit: 500
      },
      connect: {
        email: "blandit@aliquameros.edu",
        call: 4155187777
      }
      
    },
    view: 0,
    comments:[{
      user: 'Frog',
      creatAt:'Thu Jun 14 2018 13:52:57 GMT-0700 (PDT)',
      text: "this dog so cute!",
      reply:[]
    }],
    photo: [
      "https://steamuserimages-a.akamaihd.net/ugc/915786698272951199/2B5EA5EBE96CB5D67F8808F07A707C2147C3E3ED/",
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225919/Pembroke-Welsh-Corgi-On-White-01.jpg",
      "https://petfood-creation.jp/wp-content/uploads/2017/04/Corgi.jpg",
      "https://i.amz.mshcdn.com/uNsGawCW9Cd0fENdITkloXqsfa0=/1200x627/2014%2F12%2F11%2Fa7%2Fcorgis.3872f.jpg"
    ],
    location: {
      street: "26356 STANWOOD AVE",
      city: "Hayward",
      state: "CA",
      zipcode: 94544
    },
    description: "The Cardigan Welsh Corgi requires more exercise than its size indicates. This breed greatly enjoys the outdoors. The Cardigan Welsh Corgi enjoys long walks and sports such as Frisbee catch. Herding is the Cardigan Welsh Corgi’s favorite activity. The Cardigan Welsh Corgi should not be made to jump from significant heights (even a few feet) or run for great distances because of its long back and short legs. It doesn’t mind apartment life as long as it is sufficiently exercised."
  },

]

const insertSamplePost = function() {
  samplePost.forEach(function (dog) {
  	DogPost.create(dog)
    .then(res => {
    	console.log('success: ', res)
    })
    .catch(error => {
    	console.error('error: ', error)
    })
  })
};

const insertSampleUser = function() {
  User.create(sampleUser)
    .then(() => db.disconnect());
};


//insertSampleUser();
//insertSamplePost();
