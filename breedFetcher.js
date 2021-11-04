const request = require('request');
const myArgs = process.argv.slice(2);

const dynamicBreedName = (breed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

    if (error) {
      console.log('Something went wrong:', error);
      return;
    }
    
    const data = JSON.parse(body);

    if (data.length === 0) {
      console.log('Breed not found.');
      return;
    }

    console.log(data[0].description);
  });
}

dynamicBreedName(myArgs[0]);