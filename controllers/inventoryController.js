const products = [
    {
        _id: 2,
        "name": "Shirt",
        "size": "M",
        "price": "1299"
    },
    {
        _id: 3,
        "name": "Pants",
        "size": "XL",
        "price": "1999"
    }
];

module.exports = {
    // Add a new Product
    addProduct: (req, res) => {
        try {
            console.log("api call: ", req?.body);

            products.push(req.body);

            res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Product added successfully",
                data: req.body
            });
        } catch (e) {
            res.status(500).json({
                success: false,
                statusCode: 500,
                message: "Internal Server Error"
            });
        }
    },
    // get All products
    getProducts: (req, res) => {
        try {
            console.log("products call: ", products);

            res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Products retrieved successfully",
                count: products?.length,
                data: products
            });
        } catch (e) {
            res.status(500).json({
                success: false,
                statusCode: 500,
                message: "Internal Server Error"
            });
        }
    },

    // Get a single product by ID
    getProductById: (req, res) => {
        try {
            const productId = parseInt(req.params.id); // Convert ID from string to number
            const product = products.find((product) => product._id === productId);

            if (!product) {
                return res.status(404).json({
                    success: false,
                    statusCode: 404,
                    message: "Product not found",
                });
            }

            res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Product retrieved successfully",
                data: product,
            });
        } catch (e) {
            res.status(500).json({
                success: false,
                statusCode: 500,
                message: "Internal Server Error",
            });
        }
    },
    updateProduct: (req, res) => {
        try {
            console.log("reqBody: ", req.body);
            console.log("Products Dtaa-", products)

            const productIndex = products.findIndex((product) => product._id === req.body.productId);
            if (productIndex === -1) {
                return res.status(200).json({
                    success: false,
                    statusCode: 404,
                    message: "Product not found"
                });
            } else {
                products[productIndex] = req.body.updatedData;

                res.status(200).json({
                    success: true,
                    statusCode: 200,
                    message: "Product updated successfully",
                    data: products[productIndex]
                });
            }

        } catch (e) {
            res.status(500).json({
                success: false,
                statusCode: 500,
                message: "Internal Server Error"
            });
        }
    },
    // To update using Patch
    patchProduct: (req, res) => {
        try {
            console.log("reqBody: ", req.body);
            console.log("Products Data-", products);

            const productIndex = products.findIndex((product) => product._id === req.body.productId);

            if (productIndex === -1) {
                return res.status(404).json({
                    success: false,
                    statusCode: 404,
                    message: "Product not found"
                });
            }

            // Merge updated fields with existing product
            products[productIndex] = { ...products[productIndex], ...req.body.updatedData };

            res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Product updated successfully",
                data: products[productIndex]
            });

        } catch (e) {
            res.status(500).json({
                success: false,
                statusCode: 500,
                message: "Internal Server Error"
            });
        }
    },

    // Delete a Product
    deleteProduct: (req, res) => {
        try {
            console.log("Delete Request: ", req.body);

            const productIndex = products.findIndex((product) => product._id === req.body.productId);
            console.log("productIndex value is -", productIndex);

            if (productIndex === -1) {
                return res.status(404).json({
                    success: false,
                    statusCode: 404,
                    message: "Product not found"
                });
            }

            const deletedProduct = products.splice(productIndex, 1);

            res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Product deleted successfully",
                data: deletedProduct
            });

        } catch (e) {
            res.status(500).json({
                success: false,
                statusCode: 500,
                message: "Internal Server Error"
            });
        }
    }
};