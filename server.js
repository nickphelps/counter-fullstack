var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'))

let counter = 0

app.get('/value', function(req, res, nextFn) {
    console.info('value...', counter)
    // req.send(counter)
    res.json(counter)
})

app.get('/increment', function(req, res, nextFn) {
    console.info('increment...', counter)
    counter = counter + 1
    res.json(counter)
})

app.get('/decrement', function(req, res, nextFn) {
    console.info('derement...', counter)
    counter = counter - 1
    res.json(counter)
})

app.get('/reset', function(req, res, nextFn) {
    console.log('resetting...', counter)
    counter = 0
    res.json(counter)
})

app.listen(3000, function(){
    console.log('Counter is now listening on port 3000...');
})