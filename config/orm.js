var connection = require("../config/connection.js");
var orm = {

    selectAll: function(tableInput,cb){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString,[tableInput],function(err, result){
            cb(result);
        });
    },
    insertOne: function(burger_name,cb){
        var queryString = "INSERT INTO burgers";
        queryString+= " (burger_name, devoured) VALUES (?,false)";
        connection.query(queryString,[burger_name],function(err, result){
            cb(result);
        });
    },
    updateOne: function(id,cb){
        var queryString = "UPDATE burgers";
        queryString+=" SET DEVOURED=TRUE WHERE id = ?";
        connection.query(queryString,[id],function(err, result){
            cb(result);
        });
    }


    
};
module.exports = orm;