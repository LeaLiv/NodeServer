const express = require('express');
const router = express.Router();

const { getProducer, postProducer, putProducer } = require('../Controllers/ProducerContoller')

router.get('/:email', getProducer);
router.post('/', postProducer);
router.put('/:email', putProducer);

module.exports = router;