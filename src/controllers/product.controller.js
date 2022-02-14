const Product = require("../schemas/Product")

const getProducts = (req, res) => {
    try {

        const products = Product.find()

        return res.status(200).json({
        ok: true,
        message: "",
        products,
    });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error con el servidor",
        });
    }
    res.json({message: "Hola desde la creacion de un producto"});
};

const createProducts = async (req, res) => {
    try {
        console.log(req.body);

        const {name, stock, precio} = req.body;

        const newProduct = new Product({name, stock, price})

        const productSaved = await newProduct.save()

        return res.status(200).json({
        ok: true,
        message: "Producto creado con exito",
        product: productSaved
    });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error con el servidor",
        });
    }
};

const updateProducts = async (req, res) => {
    try {
        const { id, name, stock, precio} = req.body;

        const userExist = await Product.exists({_id: id})

        if (!userExist)
            return res.status(500).json({
            ok: false,
            message: "No existe el producto",
        });

        const productoUpdate = await Product.findByAndUpdate(id,
        {
        $set: {name, stock, price},
        },
        {new: true}
        );
        return res.status(200).json({
        ok: true,
        message: "Producto creado con exito",
        product: productSaved
    });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error con el servidor",
        });
    }
};


const deleteProducts = async (req, res) => {
    try {
        const { id} = req.body;

        const userExist = await Product.exists({_id: id})

        if (!userExist)
            return res.status(500).json({
            ok: false,
            message: "No existe el producto",
        });

        const productoUpdate = await Product.deleteOne({_id})
       
        return res.status(200).json({
        ok: true,
        message: "Producto eliminado con exito",
        product: productSaved
    });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error con el servidor",
        });
    }
};

module.exports = {getProducts, createProducts, updateProducts, deleteProducts};