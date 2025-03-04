const router = require('express').Router();


const { addProduct, getProducts, updateProduct, patchProduct, deleteProduct } = require('./controllers/inventoryController');

const authMiddleware = require('./middlewares/authMiddleware');

router.post('/addProduct', authMiddleware, addProduct);

router.get('/getProducts', authMiddleware, getProducts);

router.put('/updateProduct', authMiddleware, updateProduct);
router.patch('/patchProduct', authMiddleware, patchProduct);

router.delete('/deleteProduct',authMiddleware,deleteProduct);

module.exports = router;