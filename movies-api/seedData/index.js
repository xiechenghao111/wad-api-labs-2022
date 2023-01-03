import userModel from '../api/users/userModel';
import genresModel from '../api/genres/genresModel';
import users from './users';
import genres  from './genres';
import dotenv from 'dotenv';
import movieModel from '../api/movies/movieModel';
import movies from './movies.js';
import reviewModel from '../api/reviews/reviewModel';
import review from './review.js';
import people from './people';
import peopleModel from '../api/people/peopleModel';
import TVModel from '../api/TV/TVModel';
import TV from './TV';


dotenv.config();

// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}
async function loadReviews() {
  console.log('load review Data');
  try {
    await reviewModel.deleteMany();
    await reviewModel.collection.insertMany(review);
    console.info(`${review.length} reviews were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load review Data: ${err}`);
  }
}
async function loadGenres() {
  console.log('load genres Data');
  try {
    await genresModel.deleteMany();
    await genresModel.collection.insertMany(genres);
    console.info(`${genres.length} genres were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load genres Data: ${err}`);
  }
}
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadPeople() {
  console.log('load seed data');
  console.log(people.length);
  try {
    await peopleModel.deleteMany();
    await peopleModel.collection.insertMany(people);
    console.info(`${people.length} people were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load person Data: ${err}`);
  }
}
export async function loadTV() {
  console.log('load seed data');
  console.log(TV.length);
  try {
    await TVModel.deleteMany();
    await TVModel.collection.insertMany(TV);
    console.info(`${TV.length} TV were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load TV Data: ${err}`);
  }
}
if (process.env.SEED_DB) {
  loadUsers();
  loadGenres();
  loadMovies();
  loadReviews();
  loadPeople();
  loadTV();
}



