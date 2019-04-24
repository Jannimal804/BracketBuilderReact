var db = require("../models");

module.exports = function(app) {
    app.get("/competitors", function(req,res){
        db.competitors.findAll({})
        .then(function(dbCompetitors){
            res.json(dbCompetitors);
        });
    });
}

// app.post("/api/competitors", function(req, res) {
//     // run a query to get users that match our user's belt + weight
//     const userData = req.body;

//     db.Competitors.findAll({
//       where: { belt_color: userData.belt_color, weight: userData.weight}
//     }).then((matchesRes) => {
//       db.Competitors.create(req.body).then(() => {
//         res.json(matchesRes); 
//       });      
//     });
//   });