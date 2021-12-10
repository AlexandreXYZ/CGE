import mysql2 from "mysql2/promise"

export const pool = mysql2.createPool({
	host: "::1",
	user: "root",
	database: "cge",
	password: "",
	port: 3306,

	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
})