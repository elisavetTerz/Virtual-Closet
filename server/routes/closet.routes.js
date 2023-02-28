const router = require ('express').Router();
const controller = require('../controllers/closet.controllers');

router.post('/upload', controller.upload);
router.post('/update', controller.update);
router.get('/get_item/:category', controller.get_item_by_category);
router.get('/get_item/:season', controller.get_item_by_season);
router.get('/get_item/:color', controller.get_item_by_color);
router.delete('/remove/:_id', controller.remove);


module.exports = router;