import { pool } from '../mySqlPoolConnection'

export class mySqlGetCoordinatesRepository {

    async checkDate(date: string | Date): Promise<boolean> {
        try {
			date = new Date(date).toISOString()

			const [ rows ] = await pool.query(` SELECT EXISTS(SELECT * FROM gnomon_V WHERE date="${date}" LIMIT 1) `)
			const exists = rows[0][`EXISTS(SELECT * FROM gnomon_V WHERE date="${date}" LIMIT 1)`] ? true : false

			return exists
        } catch (err) {
			err = {
				statusCode: 500,
				message: "Error when checking date in database!",
				code: err.code,
				stack: "mySqlGetCoordinatesRepository.ts",
				hint: err.code == "ECONNREFUSED" ? "Probably MySQL is off!" : null,
				error: err,
			}
			
			console.error(err)
			throw new Error(err)
		}
	}
}