const router = require('express').Router();


const { addProduct, getProducts, getProductById,  updateProduct, patchProduct, deleteProduct } = require('./controllers/inventoryController');

const authMiddleware = require('./middlewares/authMiddleware');

router.post('/addProduct', authMiddleware, addProduct);

router.get('/getProducts', authMiddleware, getProducts);
router.get("/products/:id", authMiddleware, getProductById);

router.put('/updateProduct', authMiddleware, updateProduct);
router.patch('/patchProduct', authMiddleware, patchProduct);

router.delete('/deleteProduct',authMiddleware,deleteProduct);

module.exports = router;