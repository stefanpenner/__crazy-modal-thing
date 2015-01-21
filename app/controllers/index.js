import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleFirstName() {
      this.toggleProperty('a');
    },

    toggleLastName() {
      this.toggleProperty('b');
    }
  }
});
