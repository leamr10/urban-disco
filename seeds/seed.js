const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const seedUsers = require('./user_data.json');
const seedPosts = require('./post_data.json');
const seedComments = require('./comment_data.json');
console.log(seedUsers);

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(seedUsers, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(seedPosts)
  await Comment.bulkCreate(seedComments)

  console.log("Seeding done!");

  process.exit(0);
};

seedDatabase();