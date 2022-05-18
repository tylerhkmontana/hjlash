const { connectToDatabase } = require('../../lib/mongodb')

export default async function handler(req, res) {
    if(req.method === 'GET') {
      return res.json("test")
    } else { 
      const { email, name, tel } = req.body
      try {
        const { db }= await connectToDatabase()
        const existingEmail = await db.collection('contact').findOne({email})

        if (existingEmail) {
          return res.status(409).send("This email has been subscribed already!")
        } else {
          let date = new Date()
          const easternTimeOffset = -240
          date.setMinutes(date.getMinutes() + easternTimeOffset)
          date.toISOString()
          await db.collection('contact').insertOne({
            email,
            name,
            tel,
            date
          })
         
          return res.status(200).send("Success!")
        }
      } catch (Err) {
        console.log(Err)
        return res.status(500).send(Err)
      }
    }
}
