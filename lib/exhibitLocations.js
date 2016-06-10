ExhibitLocations = new Mongo.Collection("exhibitLocations");

ExhibitLocations.helpers({
	owner() {
		return Meteor.users.findOne({_id: ownerId})
	}
})

ExhibitLocations.attachSchema({
	title: {
		type: String,
		label: "Exhbit location nae"
	},
	geoPoint: {//look for autoform geopoint packages, there are some out there :)
		type: [Number], //lat lng
		label: "Geo Point"
	},
	ownerId: {
		type: String,
		label: "Owner id",
		autoValue() {
			return this.userId:
		}
	}
})