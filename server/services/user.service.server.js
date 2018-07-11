module.exports = function(app){

	var userModel = require('../model/user/user.model.server.js');
	var passport = require('passport');
	var LocalStrategy = require('passport-local').Strategy;

	passport.serializeUser(serializeUser);
	passport.deserializeUser(deserializeUser);
	passport.use(new LocalStrategy(localStrategy));

	// var users = [
	// 	{_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
	// 	{_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
	// 	{_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com"},
	// 	{_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
	// ];


	app.post('/api/user', createUser);
	app.post('/api/register', register);
	app.post  ('/api/login', passport.authenticate('local'), login);
	app.post ('/api/loggedIn', loggedIn);
	app.post('/api/logout', logout);
	app.get('/api/user/:uid', findUserById);
	app.get('/api/user', findUser);
	app.put('/api/user/:uid', updateUser);
	app.delete('api/user/:uid', deleteUser);


	function serializeUser(user, done) {
	    done(null, user);
	}

	function deserializeUser(user, done) {
		userModel
			.findUserById(user._id)
			.then(
				function(user){
	                done(null, user);
	            },
	            function(err){
	                done(err, null);
	            }
	        );
	}

	function localStrategy(username, password, done) {
		userModel.findUserByCredentials(username, password).then(
			(user) => {
				if(user) {
					return done(null, user);
                } else {
                    return done(null, false);
                }
            }
        )
   }

	function createUser(req, res) {
		var user = req.body;
		userModel.createUser(user).then(
			(data) => {
				res.json(data);
			}
		)
  	}

  	function register (req, res) {
  		var user = req.body;
  		userModel.createUser(user).then(
  			function(user){
  				req.login(user, function(err) {
  					res.json(user);
  				});
            }
        );    	
	}

	function login(req, res) {
	   var user = req.user;
	   res.json(user);
	}

	function loggedIn(req, res) {
	    if(req.isAuthenticated()){
	    	res.send(req.user);
	    }else{
	    	res.send("0");
	    }
	}

	function logout(req, res) {
	   req.logOut();
	   res.send(200);
	}

	function findUserById(req, res) {
		var uid = req.params["uid"];
		userModel.findUserById(uid).then(
			data => {
				res.json(data);
			}
		)
	}

	function findUser(req, res) {
		const username = req.query['username'];
		const password = req.query['password'];
		if(username && password) {
			userModel.findUserByCredentials(username, password).then(
				data => {
					res.json(data);
				}
			);
			return;
		}
		// find user by username
		if(username) {
			userModel.findUserByUsername(username).then(
				data => {
					res.json(data);
				}
			);
			return
		}
		res.json(users);
	}


    function updateUser(req, res) {
    	var uid = req.params['uid'];
    	var user = req.body;
    	userModel.updateUser(uid, user).then(
    		data => {
    			res.json(data);
    		}
    	);
  	}


    function deleteUser(req, res) {
	    var uid = req.params['uid'];
	    userModel.deleteUser(uid).then(
	    	data => {
	    		res.json(data);
	    	}
	    );
	}

}
