const successMessage = ({ action, entity }) => ({
  status: "SUCCESS",
  message: `${entity} has been ${action} successfully`,
  timeStamp: new Date()
});

module.exports = successMessage;
