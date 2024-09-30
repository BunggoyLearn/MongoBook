const users = [
  'Bongles',
  'PutridSnake',
  'FriezaSlays',
  'OhYes'
];

const emails = [
  'zippy@gmail.com',
  'hotsaucs@hotmail.com',
  'jibglib@yahoo.com',
  'sadpuppy60@aol.com'
]

const availiableReactions = [
  'Happy',
  'Sad',
  'Funny',
  'Love'
];

const thoughts = [
  'Did I leave the oven on?',
  'It smells like updog in here!',
  'I wanna rock!',
  'Five Nights at Feddies'
];

const seedCopyPaste = [
  {
    "username": "Bunggoy",
    "email": "bunggoy@bunggoy.com"
  },
]

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomThought = () =>
  `${getRandomArrItem(thoughts)}`;

const getRandomUser = () =>
  `${getRandomArrItem(users)}`;

const getRandomEmail = () =>
  `${getRandomArrItem(emails)}`;

// Function to generate random assignments that we can add to student object.
const getRandomReactions = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    let x = getRandomArrItem(users);
    results.push({
      reactionBody: getRandomArrItem(availiableReactions),
      username: getRandomArrItem(users)
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomReactions, getRandomThought, getRandomUser, getRandomEmail };
