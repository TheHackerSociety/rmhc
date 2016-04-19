Meteor.methods({
  'getDistance'(origin, destinations) {
    const url = 'https://maps.googleapis.com/maps/api/distancematrix/json?';
    const params = {
      units: 'imperial',
      origins: origin,
      destinations,
      key: 'AIzaSyBstSA-EnRIzfEH52Xm1l7RP3FSDfb3Fjs',
    };
    const convertAsyncToSync = Meteor.wrapAsync(HTTP.get);
    const result = convertAsyncToSync(url, { params });
    return result;
  },
});
