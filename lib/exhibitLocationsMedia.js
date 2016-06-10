ExhibitLocationsMedia = new Mongo.Collection("exhibitCollectionsMeda");
//think about this later

ExhibitLocationsMedia.attachSchema({
	mediaType: {
		type: String,
		label: "Media TYpe",
		autoform: {
			options() {
				return [
					{label: "audio", value: "audio"},
					{label: "video", value: "video"},
					{label: "picture", value: "picture"},
					{label: "text", value: "text"}
			}
		}
	}
})