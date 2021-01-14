const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    console.log('Connection has been made');
    // Create recipe commented not to be created agfain over and over
    /*return Recipe.create({
      title: 'Alubias negras de Tolosa',
      level: 'Easy Peasy',
      ingredients: [
        'alubias negras de Tolosa',
        'piparras',
        'chorizo',
        'morcilla',
        'agua',
        'sal'
      ],
      cuisine: 'basque traditional',
      dishType: 'main_course',
      image:
        'https://recetasdecocina.elmundo.es/wp-content/uploads/2017/12/principal3.jpg',
      duration: 210,
      creator: 'Daniel Eguia'
    });*/
  })
  .then((recipe) => {
    console.log(recipe);
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });
