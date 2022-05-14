const { connectToDatabase } = require('../../lib/mongodb')

export default async function handler(req, res) {
    if(req.method === 'GET') {
      return res.json("test")
    } else { 
      const { email, name, tel } = req.body
      try {
        const db = await connectToDatabase()
        db.contact.insertOne({
          email,
          name,
          tel
        })
       
        return res.status(200).send("Success!")
      } catch (Err) {
        console.log(Err)
        return res.status(500).send(Err)
      }
    }
}
