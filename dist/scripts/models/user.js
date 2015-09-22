var UserModel = Backbone.Model.extend({
	urlRoot : 'http://tiyfe.herokuapp.com/collections/noelprofile',
	defaults: {
		idAttribute: "_id",
		name: 'Marcus Doe',
		email: 'mdoe@gmail.com',
		role: 'Developer'
	}
});
