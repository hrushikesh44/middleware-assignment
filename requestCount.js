const express =  require('express');

const app = express();

let requests = 0;

app.use(function(req, res, next) {
    requests = requests + 1;
    next();
})

app.get("/add", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b; 
    res.json({
        answer: sum
    });
})

app.get("/subtract", function (req, res) {
    const difference = req.query.a - req.query.b; 
    res.json({
        answer: difference
    });
})

app.get("/multiply", function (req, res) {
    const product = req.query.a * req.query.b; 
    res.json({
        answer: product
    });
})

app.get("/divide", function (req, res) {
    const quotient = req.query.a / req.query.b; 
    res.json({
        answer: quotient
    });
})

app.get("/request", function(req, res){
    res.json({
        "number of requests" : requests
    })
})

app.listen(3000);