const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to my home page')
  }

  if (req.url === '/about') {
    res.end('Here is out short history')
  }
  res.end(`
<h1>Oops!</h1>
<p>We can't seen to find the page you are looking for.</p>
<a href="/">Back to homepage</a>
`)
})

server.listen(5000)
