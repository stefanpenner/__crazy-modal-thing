import Ember from 'ember';

export default Ember.View.extend({
  classNames: 'modal-inner',
  render(buffer) {
    this._morph = buffer.dom.appendMorph(document.getElementById('modals'))
    this._super.apply(this, arguments);
  },

  positionRelativeParent() {
    var $parent = this.get('parentView').$().parent();
    var position = $parent.position();
    var parentWidth = $parent.width();
    var parentHeight  = $parent.height();

    var top = position.top;
    var left = position.left + parentWidth;

    Ember.$(this.element).css({
      position: 'absolute',
      top: top,
      left: left
    });
  },

  willInsertElement() {
    var view = this;

    this._super.apply(this, arguments);

    window.requestAnimationFrame(function entangle() {
      if (view._state === 'inDOM') {
        view.positionRelativeParent();
        window.requestAnimationFrame(entangle);
      }
    });
  },

  didInsertElement() {
    this.positionRelativeParent();
    this._super.apply(this, arguments);
  },

  willClearRender() {
    var morph = this._morph;
    Ember.run.schedule('render', morph, morph.destroy);
    this._super.apply(this, arguments);
  }
});
