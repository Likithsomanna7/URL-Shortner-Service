const shortid = require('shortid');
const Url = require('../models/schema'); 
const shortid1 =require('shortid')

const homeshandler=async(req,res)=>
{
   const data=await Url.find();
   res.send(data);
}
const homepagehandler = (req,res)=>
{
    res.render("home",{});
}

const incomingurlhandler = async (req, res) => {
    const body = req.body;

    if (body && body.url) {
        const redirecturl1 = body.url;
     

        try {
            var shortid2 = shortid1.generate();
            const data = await Url.create({
                shortid: shortid2,
                redirecturl: redirecturl1, 
                visitcount: [],
            });
            res.send(shortid2);
           
        } catch (error) {
            console.error("Error creating URL entry:", error);
            res.status(500).send("Internal Server Error");
        }
    } else {
        res.status(400).send("Invalid URL");
    }
};


const outgoingurlhandler =async(req,res) =>
    {
       const params1 =req.params.urls;
    const data =await Url.findOneAndUpdate({shortid:params1},{$push :{visitcount:{timestamp:Date.now()}}})
        res.redirect(data.redirecturl);
}

const noofvisits =async(req,res)=>
{
    const params2 = req.params.counts;
    const data1 = await Url.findOne({shortid:params2})
    res.json({visits:data1.visitcount.length})
}
module.exports = {incomingurlhandler ,outgoingurlhandler,noofvisits,homepagehandler,homeshandler};
