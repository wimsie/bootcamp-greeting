/*
 * This is a small greeting app for task2 of the Staffbase bootcamp
 */

var express = require('express')
var app = express()

// Greet the client based on the time of day
app.get('/', function (req, res) {
  var date = new Date()
  var datetime = date.toISOString().replace(/T/, ' ').replace(/\..+/, '')
  var hour = date.getHours()
  var greeting = "Good Day"

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning!"
  } else if (hour >= 12 && hour < 18) {
    greeting = "Good Afternoon!"
  } else if (hour >= 18 && hour < 22) {
    greeting = "Good Evening!"
  }

  res.send(greeting + '<br /><br />Current date and time is: ' + datetime)
})

// Launch listening server on port 8080 and consoles the log.
app.listen(8081, function () {
  console.log('greeting application started - listening on port 8080!')
})
