const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('HEY, HEY!')
})
app.listen(3005, () => console.log('Server running on port 3005'))
