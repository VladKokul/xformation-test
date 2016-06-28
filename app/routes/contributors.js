import Ember from 'ember';


let contributors = Ember.$.getJSON('/json/contributors.json');

export default Ember.Route.extend({
  model () {
    return contributors.then(orders => orders.sortBy('contributions').reverse());
  }
});
