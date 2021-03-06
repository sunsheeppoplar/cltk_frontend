import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Definitions = new Meteor.Collection('definitions');

Definitions.schema = new SimpleSchema({
	headword: {
		type: String,
		max: 60,
	},
	pos: {
		type: String,
	},
	definition: {
		type: String,
	},

	createdAt: {
		type: Date,
		optional: true,
		autoValue() {
			if (this.isInsert) {
				return new Date();
			}
			return null;
		},
	},
	updatedAt: {
		type: Date,
		optional: true,
		autoValue() {
			if (this.isUpdate) {
				return new Date();
			}
			return null;
		},
	},

});

Definitions.attachSchema(Definitions.schema);

export default Definitions;
