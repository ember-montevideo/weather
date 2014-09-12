import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmWeatherENV.locationType
});

Router.map(function() {
  this.resource('city', { path: 'cities/:city_id' });
});

export default Router;
