import Store from '../models/store';

export default {
  name: 'store',

  initialize: function(container, app) {
    app.register('store:main', Store);
    app.inject('route', 'store', 'store:main');
    app.inject('controller', 'store', 'store:main');
  }
};
