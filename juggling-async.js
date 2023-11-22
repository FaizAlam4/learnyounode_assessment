

// let url1="http://openlibrary.org/works/OL18020194W/bookshelves.json"
// let url2="http://openlibrary.org/works/OL18020194W/ratings.json"
// let url3="http://openlibrary.org/works/OL45804W.json"
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3)
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)