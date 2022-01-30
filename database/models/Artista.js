module.exports = (sequelize, dataTypes) => {
    let alias = "Artistas";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "artistas"
    }
    
    const Artista = sequelize.define(alias, cols, config);

    return Artista;
}