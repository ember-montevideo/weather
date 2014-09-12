import YahooAdapter from '../adapters/yahoo';

export default {
  name: 'yahoo',

  initialize: function(container, app) {
    app.register('adapter:city', YahooAdapter);
  }
};
