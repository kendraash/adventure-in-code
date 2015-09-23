import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
      postFormShow() {
        this.set('addNewPost', true)
      },

      save() {
        var params = {
          date: this.get('date'),
          title: this.get('title'),
          author: this.get('author'),
          text: this.get('text'),
          image: this.get('image')
        };
        this.set('addNewPost', false),
        this.sendAction('save', params);

      }
  }
});
