// QuantumSnippets.js

const fs = require('fs');
const axios = require('axios');
const crypto = require('crypto');

/**
 * Function to generate a random hexadecimal string of given length
 * @param {number} length Length of the hexadecimal string to be generated
 * @returns {string} Random hexadecimal string
 */
function generateRandomHex(length) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

/**
 * Function to fetch random dog images from an API
 * @param {number} count Number of random dog images to fetch
 * @returns {Promise<string[]>} Array of URLs of random dog images
 */
async function getRandomDogImages(count) {
  try {
    const response = await axios.get(`https://dog.ceo/api/breeds/image/random/${count}`);
    return response.data.message;
  } catch (error) {
    throw new Error('Failed to fetch random dog images');
  }
}

/**
 * Function to read content of a file asynchronously
 * @param {string} filePath Path to the file to be read
 * @returns {Promise<string>} Content of the file
 */
function readFileContent(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = {
  generateRandomHex,
  getRandomDogImages,
  readFileContent
};
