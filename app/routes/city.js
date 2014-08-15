import Ember from 'ember';
import YahooAdapter from '../adapters/yahoo';

export default Ember.Route.extend({
  model: function(params) {
    var yahooAdapter = YahooAdapter.create();
    return yahooAdapter.find("city", params.id);
  }
});
