http = require('http') 
nko = require('nko')('yourteamsecret')

app = http.createServer (req, res) ->
  res.writeHead(200, 'Content-Type': 'text/html')
  res.end('Hello, World')

app.listen(parseInt(process.env.PORT) || 7777)
console.log('listening on ' + app.address().port)