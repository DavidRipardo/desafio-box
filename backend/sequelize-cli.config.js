const path = require('path')

/** @type {import('sequelize').Options} **/
module.exports = {
	dialect: "sqlite",
	storage: path.join("src", "database", "dev.db"),
};
