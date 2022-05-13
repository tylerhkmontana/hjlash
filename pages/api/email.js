const { connectToDatabase } = require('../../lib/mongodb')

export default function handler(req, res) {
    if(req.method === 'GET') {
      return res.json("test")
    } else { 
      const email = req.body
      console.log(email)
      return res.json('test')
    }
}
