import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'bins.insert': function() {
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: Meteor.userId()
    });
  },

  'bins.remove': function (bin) {
    return Bins.remove(bin);
  },

  'bins.update': function (bin, content) {
    return Bins.update(bin._id, { $set: { content } });
    // ES6 { content : content } can to { content }
  }
});

export const Bins = new Mongo.Collection('bins');
