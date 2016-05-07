Events = new Mongo.Collection('events');

Events._timeOfDayRegex = /^\s*[0-1]?[0-9]\s*:\s*[0-5][0-9]\s+[AP]M*$/i;

Events.attachSchema(new SimpleSchema({
  place: {
    type: String,
  },
  address: {
    type: Object,
  },
  "address.$.street": {
    type: String,
  },
  "address.$.zip": {
    type: String,
    regEx: /^\s*\d{5}\s*(-\s*\d{4}\s*)?$/,
  },
  date: {
    type: Date,
  },
  morningStartTime: {
    type: String,
    regEx: Events._timeOfDayRegex,
  },
  morningEndTime: {
    type: String,
    regEx: Events._timeOfDayRegex,
  },
  noonStartTime: {
    type: String,
    regEx: Events._timeOfDayRegex,
  },
  noonEndTime: {
    type: String,
    regEx: Events._timeOfDayRegex,
  },
}));

export default Events;
