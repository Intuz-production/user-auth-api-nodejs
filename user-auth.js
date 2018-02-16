// Copyright (C) 2018 INTUZ. 

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to
// the following conditions:

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
// ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
// THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
var async = require('async');

exports.auth = function () {
    return {
        /*
         * Use: Check if user(s) exist and active in db
         * Args: req, user_array, done(Function callback())
         * Return: status(int), message (String), exist_user_array
         */
        user_auth: function (req, user_array, done) {
            var res = {};
            req.getConnection(function (err, connection) {
                var int_user_array = user_array.map(Number)
                var exist_user_array = [];

                async.forEachOf(int_user_array, function (value, key, callback) {
                    // Find active user by id from "user" table
                    var sql = "SELECT * FROM user WHERE id = '" + value + "' AND status = 1 ";
                    connection.query(sql, function (err, rows) {
                        if (err) {
                            callback();
                        } else {
                            if (rows.length > 0) {
                                exist_user_array.push(parseInt(value))
                            } 
                            callback();
                        }
                    });
                }, function (err) {
                    if (err){
                        res.status = 0;
                        res.message = "There is an error processing your data, please try again!";
                        return done(res);
                    }
                    else{
                        if(int_user_array.sort().toString() == exist_user_array.sort().toString()){
                            res.status = 1; // All users are active
                        }
                        else{
                            res.status = 0; // Some or all users are inactive
                            res.exist_user_array = exist_user_array; // Array of active user id(s) if any from given array of user_id
                            res.message = "User(s) not found";
                        }
                        return done(res);
                    }
                });
            });
        }
    }
}
