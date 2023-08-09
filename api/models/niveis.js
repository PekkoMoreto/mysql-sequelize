"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	const Nveis = sequelize.define("Niveis", {
		descr_nivel: DataTypes.STRING
	}, {});
	Nveis.associate = function(models){
		Nveis.hasMany(models.Turmas, {foreignKey: "nivel_id"});
	};

	return Nveis;
};