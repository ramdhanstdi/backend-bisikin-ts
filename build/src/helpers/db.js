"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const connectionString = process.env.DATABASE_URL;
const db = new pg_1.Pool({
    connectionString
});
exports.default = db;
