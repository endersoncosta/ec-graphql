var pg = require('pg');
pg.defaults.ssl = true;
const Sequelize = require('sequelize');
const database = new Sequelize(`postgres://yfsvcgaxtnhvkd:bb760a03d39a141e0bb39eb6771c086f7b32688c51381f844aaab1907177e545@ec2-107-21-201-238.compute-1.amazonaws.com:5432/delvne769ngo4d`,
{
    dialect: 'postgres'
});
module.exports = database;