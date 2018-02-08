var data = require("../data.json");

exports.addFriend = function(req, res) { 
    console.log(data);

    res.render('index', {

        "newFriend": [
          { "name": req.query.name,
            "image": req.query.description,
            "imageURL": "http://lorempixel.com/400/400/people"
          }
        ]
      });

data.friends.push(newFriend);

};


