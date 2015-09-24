import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,

  actions: {
    updatePostForm(){
      this.set('updatePostForm', true);
    },

    update(post) {
      var params = {
        date: this.get('date'),
        title: this.get('title'),
        author: this.get('author'),
        text: this.get('text'),
        image: this.get('image')
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);

    }
  }
});
