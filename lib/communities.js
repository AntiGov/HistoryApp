Communities = new Mongo.Collection("communities");

Communities.attachSchema({
	name: {
		type: String,
		label: "Community"
	},
	linkUrl: {
		type: string,
		label: "Link to site"
	}
})