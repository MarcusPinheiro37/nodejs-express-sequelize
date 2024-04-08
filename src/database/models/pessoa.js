'use strict';
const isCpfValido = require('../../utils/validaCpfHelper.js');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            Pessoa.hasMany(models.Curso, {
                foreignKey: 'docente_id'
            });
            Pessoa.hasMany(models.Matricula, {
                foreignKey: 'estudante_id',
                scope: { status: 'matriculado' },
                as: 'aulasMatriculadas'
            });
            Pessoa.hasMany(models.Matricula, {
                foreignKey: 'estudante_id',
                as: 'todasMatriculas'
            });
        }
    }
    Pessoa.init({
        nome: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [3, 40],
                    msg: 'O campo nome deve ter entre 3 e 40 caracteres.'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail:{
                    args: true,
                    msg: 'formato do e-mail inválido'
                }
            }
        },
        cpf: {
            type: DataTypes.STRING,
            validate: {
                cpfIsValido: (cpf) => {
                    if(!isCpfValido(cpf)){
                        throw new Error('Número CPF inválido');
                    }
                }
            }
        },
        ativo: DataTypes.BOOLEAN,
        role: DataTypes.STRING
    }, {
        sequelize,
        paranoid: true,
        modelName: 'Pessoa',
        tableName: 'tb_pessoas',
        defaultScope: {
            where:{
                ativo: true
            }
        },
        scopes: {
            todosRegistros: {
                where: {}
            }
        }
    });
    return Pessoa;
};