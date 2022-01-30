module.exports = (sequelize, dataTypes) => {
    let alias = "Albumes";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        duracion: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "albumes"
    }
    
    const Album = sequelize.define(alias, cols, config);

    return Album;
}