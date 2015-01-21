import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'modal-thing',
  actions: {
    close() {
      debugger;
      this.sendAction('close');
    }
  }
});
