//make an ajax request to server.js

function addOne () {
    //call ajax request
    $.ajax('/increment')
        .then(function (response) {
            console.log('Incrementing...',response)
            let myCounterHTMLString = `<h1>This is my Counter...${response}</h1>`
            document.getElementById('counter').innerHTML = myCounterHTMLString
        }) 
        .catch(function (error) {
            console.log('error', error);
        })
}

function subtractOne () {
    //call ajax request
    $.ajax('/decrement') 
        .then(function (response) {
            console.log('Decrementing...', response)
            let myCounterHTMLString = `<h1>This is my Counter... ${response}</h1>`
            document.getElementById('counter').innerHTML = myCounterHTMLString
        })
        .catch(function (error) {
            console.log('error', error);
        })
}

function resetFunction () {
    $.ajax('/reset')
        .then(function (response) {
            console.log('Resetting...', response)
            let myCounterHTMLString = `<h1>This is my Counter... ${response}</h1>`
            document.getElementById('counter').innerHTML = myCounterHTMLString
        })
        .catch(function (error) {
            console.log('error', error)
        })
}