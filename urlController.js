const ShortUrl =require('./urlModel')
const {nanoid} = require('nanoid')


const shortUrl =async (req,res)=>{
    const {longUrl} = req.body
    const shortUrl = nanoid(7)


    if(!longUrl){
        return res.status(400).json({error: 'longUrl is required'})
    }

   await ShortUrl.create({longUrl,shortUrl})
    console.log(shortUrl)

   console.log('app is connected to the port')
   res.status(200).json({shortUrl:`http://localhost:3000/${shortUrl}`})


}

const redirectLink = async (req,res)=>{
    const shortUrl = req.params.shortUrl
    const link = await ShortUrl.findOne({shortUrl})
    res.redirect(link.longUrl)
}

module.exports = {
    shortUrl,redirectLink
}