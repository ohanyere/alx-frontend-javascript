function getFullResponseFromAPI(success) {
  return new promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'succes' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

module.exports = getFullResponseFromAPI;
