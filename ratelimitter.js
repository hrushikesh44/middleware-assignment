const express = require('express');
const app = express();

let numberOfRequestsForUser = {};
setImmediate(()=> {
    numberOfRequestsForUser = {}
}, 1000)

app.use(function(req, res, next){
    const userId = numberOfRequestsForUser[user-id];
    if(numberOfRequestsForUser){
        numberOfRequestsForUser = numberOfRequestsForUser + 1;
        if(numberOfRequestsForUser(userId) > 5){
            res.status(404).json({
                "msg" : "too many requests"
            })
        }else{
            next();
        }
    }
})

app.get("/sum", function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        "product" : a + b
    })
})