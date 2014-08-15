import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      ['Colonia del Sacramento', 468796],
      ['Florida', 468062],
      ['Montevideo', 468052],
      ['Punta del Este', 468108],
      ['Tacuarembó', 468077],
    ].map(function(city) {
      return {
        name: city[0], id: city[1]
      };
    });
  }
});
