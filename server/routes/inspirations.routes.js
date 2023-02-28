const router = require ('express').Router();
const controller = require('../controllers/inspirations.controllers');

router.post('/upload', controller.upload);
router.post('/update', controller.update);
// router.get('/get_item/:from/:user', controller.get_item_from_category);
router.delete('/remove/:_id', controller.remove);


module.exports = router;