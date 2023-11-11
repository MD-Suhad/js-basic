const axios = require('axios');

// Function to clean the JSON object
function cleanJSON(jsonData) {
  if (typeof jsonData === 'object') {
    for (const key in jsonData) {
      if (jsonData[key] === 'N/A' || jsonData[key] === '-' || jsonData[key] === '') {
        delete jsonData[key];
      } else if (Array.isArray(jsonData[key])) {
        jsonData[key] = jsonData[key].filter(item => item !== 'N/A' && item !== '-' && item !== '');
      } else {
        cleanJSON(jsonData[key]);
      }
    }
  }
}

// Perform a GET request
axios.get('https://coderbyte.com/apai/challenges/json/json-cleaning')
  .then(response => {
    const data = response.data;
    
    // Display original JSON data
    console.log('Original JSON data:');
    console.log(JSON.stringify(data, null, 2));

    // Clean the JSON data
    cleanJSON(data);

    // Display cleaned JSON data as a string
    console.log('\nCleaned JSON data as a string:');
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error('Error:', error);
  });
