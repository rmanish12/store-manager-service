const sendResponse = data => ({
  status: "SUCCESS",
  timeStamp: new Date(),
  data: {
    ...data
  }
});

module.exports = sendResponse;
