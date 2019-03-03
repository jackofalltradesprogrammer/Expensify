// we are not using // ! import moment from 'moment' and __mocks__ tells jest to look for it
// as jest will keep calling the instance and memory will be exhausted
const moment = require.requireActual('moment');

// Jest gives us a feature to mock libraries
// Here we are mocking a moment to be created at a specific time of 0 to be used by Jest, so all moments will be same
export default (timestamp = 0) => {
  return moment(timestamp);
};
