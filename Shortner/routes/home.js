const express =require('express');
const router = express.Router();
const  {incomingurlhandler,homeshandler,outgoingurlhandler,noofvisits,homepagehandler} = require('../controllers/home.js');

router.get('/',homepagehandler);
router.get('/homes',homeshandler)
router.post('/submit',incomingurlhandler);
router.get('/:urls',outgoingurlhandler);
router.get('/visits/:counts',noofvisits);

module.exports = router;