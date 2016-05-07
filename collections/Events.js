Events = new Mongo.Collection('events');

Events.allow({
  insert: function (userId) {
    return userId
  },
  remove: function (userId) {
    return userId
  },
})

Events.attachSchema(new SimpleSchema({
  place: {
    type: String,
  },
  address: {
    type: Object,
    blackbox: true
  },
  "address.$.street": {
    type: String,
  },
  "address.$.zip": {
    type: String,
  },
  date: {
    type: Date,
  },
  morningStartTime: {
    type: String,
    optional: true
  },
  morningEndTime: {
    type: String,
    optional: true
  },
  noonStartTime: {
    type: String,
    optional: true
  },
  noonEndTime: {
    type: String,
    optional: true
  },
}));

export default Events;
