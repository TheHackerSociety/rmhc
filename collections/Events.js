Events = new Mongo.Collection('events');

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


Events.attachSchema.labels({
  place: i18n("Enter Place"),
  address: i18n("Enter Address"),
  "address.$.street": i18n("street name"),
  "address.$.zip": i18n("zip code"),
  date:i18n("date of event"),
  morningStartTime: i18n("When the event will begin"),
  morningEndTime: i18n("When the event will end"),
  noonStartTime: i18n("noon start time"),
  noonEndTime: i18n("noon end time")
});

export default Events;

