import Ember from 'ember';

let repos = Ember.$.getJSON('https://api.github.com/users/x-formation/repos');

export default Ember.Route.extend({
  model(){
    return repos.then(orders => orders.sortBy('forks').reverse());
  }

});

