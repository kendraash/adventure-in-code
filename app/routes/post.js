import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions: {
    update(post, params) {
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            post.set(key,params[key]);
          }
        });
        post.save();
        this.transitionTo('post');
    },

    delete(post) {
      if(confirm('Are you sure you want to delete this post?')) {
        post.get('comments').forEach(function(comment) {
          comment.destroyRecord();
        });
        post.destroyRecord();
        this.transitionTo("index");
      }
    },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      params.post.save();
      this.transitionTo('post', params.post);
    }
  }
});
