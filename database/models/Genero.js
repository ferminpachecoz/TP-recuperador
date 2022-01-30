module.exports = (sequelize, dataTypes) => {
    let alias = "Generos";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "generos"
    }
    
    const Genero = sequelize.define(alias, cols, config);

    return Genero;
}