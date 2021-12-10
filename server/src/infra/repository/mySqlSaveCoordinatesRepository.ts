import { ICoordinates } from "../../interface/ICoordinates"
import { pool } from "../mySqlPoolConnection"

export class mySqlSaveCoordinatesRepository {
	private date: Date
	constructor(date: Date) {
		this.date = date
	}

    async gnomon_R(realCoordinates: ICoordinates): Promise<void> {
        try {
			await pool.query(`INSERT INTO gnomon_R SET ?`, {
				x: realCoordinates.x,
				y: realCoordinates.y,
				z: realCoordinates.z,
				date: this.date
			})
        } catch (err) {
			err = {
				statusCode: 500,
				message: "Error when saving in database! (gnomon_R)",
				code: err.code,
				stack: "mySqlSaveCoordinatesRepository.ts",
				hint: err.code == "ECONNREFUSED" ? "Probably MySQL is off!" : null,
				error: err,
			}
			
			console.error(err)
			throw new Error(err)
		}
	}

	async gnomon_V(virtualCoordinates: ICoordinates): Promise<void> {
        try {
			await pool.query(`INSERT INTO gnomon_V SET ?`, {
				x: virtualCoordinates.x,
				y: virtualCoordinates.y,
				z: virtualCoordinates.z,
				date: this.date
			})
        } catch (err) {
			err = {
				statusCode: 500,
				message: "Error when saving in database! (gnomon_V)",
				code: err.code,
				stack: "mySqlSaveCoordinatesRepository.ts",
				hint: err.code == "ECONNREFUSED" ? "Probably MySQL is off!" : null,
				error: err,
			}
			
			console.error(err)
			throw new Error(err)
		}
	}
	
	async calc_Dados(differenceCoordinates: ICoordinates): Promise<void> {
        try {
			await pool.query(`INSERT INTO calc_Dados SET ?`, {
				x: differenceCoordinates.x,
				y: differenceCoordinates.y,
				z: differenceCoordinates.z,
				date: this.date
			})
        } catch (err) {
			err = {
				statusCode: 500,
				message: "Error when saving in database! (calc_Dados)",
				code: err.code,
				stack: "mySqlSaveCoordinatesRepository.ts",
				hint: err.code == "ECONNREFUSED" ? "Probably MySQL is off!" : null,
				error: err,
			}
			
			console.error(err)
			throw new Error(err)
		}
	}
}