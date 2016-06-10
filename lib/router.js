FlowRouter.route("/", {
	name: "home",
	action(){
		BlazeLayout.render("mainLayout", {main: "homeView"})
	}
})

FlowRouter.route("/nearby", {
	name: "nearbyHistory", {
		action(){
			BlazeLayout.render("mainLayout", {main: "nearbyHistoryView"});
		}
	}
})

FlowRouter.route("/exhibit/:_id", {
	name: "exhibit", {
		action(){
			BlazeLayout.render("mainLayout", {main: "exhibitView"})
		}
	}
})

FlowRouter.route("/exhibit/media/:_id", {
	name: "exhibitMedia", {
		action(){
			BlazeLayout.render("mainLayout", {main: "exhibitMediaView"})
		}
	}
})

FlowRouter.route("/search/organizations", {
	name: "searchOrganizations",
	action() {
		BlazeLayout.render("mainLayout", {main: "searchOrganizationsView"})
	}
})

FlowRouter.route("/search/musuems", {
	name: "searchMusems",
	action(){
		BlazeLayout.render("mainLayout", {main: "searchMusuemsView"})
	}
})

FlowRouter.route("/organization/:_id", {
	name: "organization",
	action(){
		BlazeLayout.render("mainLayout", {main: "organizationView"})
	}
})

FlowRouter.route("/organization/:_id/sites", {
	name: "organizationSites",
	action(){
		BlazeLayout.render("mainLayout", {main: "organizationSitesView"})
	}
})

FlowRouter.route("/organization/:_id/help", {
	name: "organizationHelp",
	action(){
		BlazeLayout.redner("mainLayout", {main: "organizationHelpView"})
	}
})