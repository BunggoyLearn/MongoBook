const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomUser, getRandomReactions, getRandomThought, getRandomEmail } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }


  // Create empty array to hold the students
  const thoughts = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const reactions = getRandomReactions(20);

    const thoughtText = getRandomThought();
    const createdAt = Date.now();
    const username = getRandomUser()

    thoughts.push({
      thoughtText,
      createdAt,
      username,
      reactions,
    });
  }

  // Add students to the collection and await the results
  const thoughtData = await Thought.create(thoughts);

  const users = [];

  for (let i = 0; i < 2; i++) {
    const username = getRandomUser();
    const email = getRandomEmail();
    const friends = [];

    users.push({
      username: username,
      email: email,
      thoughts: [...thoughtData.map(({ _id }) => _id)],
      friends: friends
    });
  }

  const userData = await User.create(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

