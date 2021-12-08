import { ICoordinates } from '../../interface/ICoordinates'
import { pool } from '../mySqlPoolConnection'

export class mySqlCoordinatesRepository {
    async saveCoordinates(coordinates: ICoordinates, date: Date): Promise<void> {
        try {
				await pool.query(`INSERT INTO gnomon_V SET ?`, {
					x: coordinates.x,
					y: coordinates.y,
					z: coordinates.z,
					date: date
				})
        } catch (error) {
            throw new Error(error.stack)
        }
    }
}