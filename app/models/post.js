import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  author: DS.attr(),
  title: DS.attr(),
  text: DS.attr(),
  image: DS.attr(),
  comments: DS.hasMany('comment', { async: true}), 
});
