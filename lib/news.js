News = new Mongo.Collection("news");

ExhibitSuggestions.helpers({
	createdBy(){
		return Meteor.users.findOne({_id: this.createdById})
	}
})

News.attachSchema({
	title: {
		type: String,
		label: "Name of event"
	},
	description: {
		type: String,
		label: "Describe event"
	},
	date: {
		type: Date,
		label: "date of event"
	},
	createdById: {
		type: String,
		label: "Created by id",
		autoValue(){
			if(this.isInsert){
				return this.userId;
			}
		}
	}
})