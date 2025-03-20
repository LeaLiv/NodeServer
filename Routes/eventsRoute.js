const express= require('express');
const router= express.Router();
const {getEvents, getEvent, postEvent, putEvent, deleteEvent} = require('../Controllers/EventContoller')

router.get('/', getEvents);
router.get('/:id', getEvent);
router.post('/', postEvent);
router.put('/:id', putEvent);
router.delete('/:id', deleteEvent);

module.exports=router;
