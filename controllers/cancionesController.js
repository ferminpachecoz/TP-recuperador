let db = require("../database/models");

const cancionesController = {
    list: (req,res) => {
        db.Canciones.findAll()
            .then(function(canciones){
                return res.status(200).json({
                    total: canciones.length,
                    data: canciones,
                    status: 200
                })
            })
    },
    show: (req,res) => {
        db.Canciones.findByPk(req.params.id)
            .then(function(cancion){
                return res.status(200).json({
                    data: cancion,
                    status: 200
                })
            })
    },
    store: (req,res) => {
        db.Canciones.create(req.body)
            .then(function(cancion){
                return res.status(200).json({
                    data: cancion,
                    status: 200,
                    created: 'ok'
                })
            })
            
    },
    update: (req,res) => {
        db.Canciones.update(req.body, {
            where: {id: req.params.id}
        })
        .then(response => {
            if(response == 1){
                res.send('la cancion se edito con exito')
            }else{
                res.send('hubo un  error al editar la cancion')
            }
        })
    },
    delete: (req,res)=>{
        db.Canciones.destroy({
            where: {id: req.params.id}
        })
        .then(response => {
            return res.json(response)
        })
    }
}
module.exports = cancionesController;