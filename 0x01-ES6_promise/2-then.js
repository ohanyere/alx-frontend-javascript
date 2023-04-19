// This function takes in a promise and returns a new promise that resolves
// with an object containing a status code and a body message if the input
// promise resolves successfully. If the input promise rejects, the returned
// promise will be rejected with a new Error object.
function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => Error())
    .finally(() => {
      // Log a message to the console indicating that a response was received
      console.log('Got a response from the API');
    });
}

// Export the function for use in other modules
module.exports = handleResponseFromAPI;
