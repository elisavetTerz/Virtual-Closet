const router = require ('express').Router();
const controller = require('../controllers/look.controllers');

router.post('/upload', controller.upload);
router.post('/update', controller.update);
router.get('/get_look/:user/:_id', controller.get_look);
router.delete('/remove/:_id', controller.remove);


module.exports = router;