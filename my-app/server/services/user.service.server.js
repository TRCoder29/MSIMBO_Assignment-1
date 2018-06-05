module.exports = function(app){
	var users = [
		{_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
		{_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
		{_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com"},
		{_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
	];

	app.get("/api/user/:uid", findUserById);

	function findUserById(req, res) {
		var uid = req.params["uid"];
	    for (let x = 0; x < users.length; x++) {
	      if (users[x]._id === uid) {
	      	res.json(users[x]);
	        return;
		    }
		  }
		}
	function findUser(req, res)
}
