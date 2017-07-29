var express = require('express');
var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req,res){
    burger.all(function(data){
        var hbsObject = {
            burgers : data
        };
        res.render("index",hbsObject);
    })
});

router.post("/", function(req,res){
    burger.insert(req.body.name,function(data){
        res.redirect("/");
    })
});

router.put("/:id", function(req,res){
    console.log(req.params.id);
    burger.update(req.params.id,function(data){
        res.redirect("/");
    })
})

// Export routes for server.js to use.
module.exports = router;