# Edwardevans

Edwardevans is a Node.js module containing interesting functions for various tasks.

## Installation

You can install this module via npm: `npm install edwardevans`

## Usage
```javascript
const quantum = require('quantum-snippets');

// Generate a random hexadecimal string
const randomHex = quantum.generateRandomHex(16);
console.log('Random Hex:', randomHex);

// Fetch 5 random dog images
quantum.getRandomDogImages(5)
  .then(images => {
    console.log('Random Dog Images:', images);
  })
  .catch(error => {
    console.error('Error fetching random dog images:', error.message);
  });

// Read content of a file asynchronously
quantum.readFileContent('path/to/file.txt')
  .then(content => {
    console.log('File Content:', content);
  })
  .catch(error => {
    console.error('Error reading file content:', error.message);
  });
```


