import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmWeatherENV.locationType
});

Router.map(function() {
  this.resource('city', { path: 'cities/:id' });
});

export default Router;
