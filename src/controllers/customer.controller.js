const Customer = require("../schemas/Customer")

const getCustomers = (req, res) => {
    try {
        const customers = Customer.find()

        const regex = new RegExp(search, "i");

        const customers = await Customer.find({ 
            $or:  [{name: regex}, {email: regex}, {company: regex}],
        }).limit(limit).sort({name: 1});

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
    res.json({message: "Hola desde la creacion de un cliente"});
};

const createCustomers = async (req, res) => {
    try {
        console.log(req.body);

        const {name, email, company, phone} = req.body;

        const newCustomer = new Customer({name, email, company, phone})

        const customerSaved = await newCustomer.save()

        return res.status(200).json({
        ok: true,
        message: "Cliente creado con exito",
        customer: customerSaved
    });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error con el servidor",
        });
    }
};

const updateCustomers = async (req, res) => {
    try {
        const { id, name, email, company, phone} = req.body;

        const userExist = await Customer.exists({_id: id})

        if (!userExist)
            return res.status(500).json({
            ok: false,
            message: "No existe el cliente",
        });

        const customerUpdate = await Customer.findByAndUpdate(id,
        {
        $set: {name, email, company, phone},
        },
        {new: true}
        );
        return res.status(200).json({
        ok: true,
        message: "Cliente creado con exito",
        customer: customerSaved
    });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error con el servidor",
        });
    }
};

const deleteCustomers = async (req, res) => {
    try {
        const { id} = req.body;

        const userExist = await Customer.exists({_id: id})

        if (!userExist)
            return res.status(500).json({
            ok: false,
            message: "No existe el cliente",
        });

        const customerUpdate = await Customer.deleteOne({_id})
       
        return res.status(200).json({
        ok: true,
        message: "Producto eliminado con exito",
        customer: customerSaved
    });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error con el servidor",
        });
    }
};

module.exports = {getCustomers, createCustomers, updateCustomers, deleteCustomers};