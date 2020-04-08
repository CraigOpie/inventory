import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Parts } from '../../api/part/Part';

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Part', function publish() {
  if (this.userId) {
    const groups = Meteor.users.findOne(this.userId).profile.group;
    return Parts.find({ group: groups });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('PartAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Parts.find();
  }
  return this.ready();
});
