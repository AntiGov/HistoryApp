Template.newsFeed.onCreated(function(){
	this.autoRun(() => {
		this.subscribe("newsFeed")
	})
}

Template.newsFeed.helpers({
	news() {
		return News.find({})
	}
})