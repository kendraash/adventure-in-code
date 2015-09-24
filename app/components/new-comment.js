import Ember from 'ember';

export default Ember.Component.extend({
  newCommentForm: false,

  actions: {
    newCommentForm() {
      this.set("newCommentForm", true);
    },

    saveComment(post){
      var params={
        text: this.get('text'),
        author: this.get('author'),
        date: this.get('date'),
        post: this.get('post')
      };

    this.set('newCommentForm', false);
    this.sendAction('saveComment', params);
    }
  }
});
