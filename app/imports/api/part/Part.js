import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Parts = new Mongo.Collection('Parts');

/** Define a schema to specify the structure of each document in the collection. */
const PartSchema = new SimpleSchema({
  name: String,
  value: String,
  quantity: Number,
  location: String,
  image: String,
  manpartnum: String,
  digipartnum: String,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Parts.attachSchema(PartSchema);

/** Make the collection and schema available to other code. */
export { Parts, PartSchema };
