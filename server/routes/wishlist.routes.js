const router = require ('express').Router();
const controller = require('../controllers/wishlist.controllers');

router.post('/upload', controller.upload);
router.post('/update', controller.update);
// router.get('/get_look/:from/:user', controller.get_look);
router.delete('/remove/:_id', controller.remove);


module.exports = router;