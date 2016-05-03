Events = new Mongo.Collection('events');

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
    },
  date: {
    type: Date,
  },
  morningStartTime: {
    type: String,
  },
  morningEndTime: {
    type: String,
  },
  noonStartTime: {
    type: String,
  },
  noonEndTime: {
    type: String,
  },
}));
