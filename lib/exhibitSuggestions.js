ExhibitSuggestions = new Mongo.Collection("exhibitSuggestions");

ExhibitSuggestions.helpers({
	createdBy(){
		return Meteor.users.findOne({_id: this.createdById}})
	}
})

ExhibitSuggestions.attachSchema({
	title: {
		type: String,
		label: "Exhibit Title"
	},
	description: {
		type: String,
		label: "Descriptioi"
	},
	createdById: {
		type: String,
		label: "Created By Id",
		autoValue() {
			if(this.isInsert){
				return this.userId;
			}
		}
	}
})