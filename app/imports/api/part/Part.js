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
  par: Number,
  maxOnHand: Number,
  location: String,
  container: String,
  group: String,
  image: String,
  manufacturerPartNumber: String,
  digiKeyPartNumber: String,
  productDescription: String,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Parts.attachSchema(PartSchema);

/** Make the collection and schema available to other code. */
export { Parts, PartSchema };
