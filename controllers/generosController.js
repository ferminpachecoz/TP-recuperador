let db = require("../database/models");

const generosController = {
    list: (req,res) => {
        db.Generos.findAll()
            .then(function(generos){
                return res.status(200).json({
                    total: generos.length,
                    data: generos,
                    status: 200
                })
            })
    }
}

module.exports = generosController;