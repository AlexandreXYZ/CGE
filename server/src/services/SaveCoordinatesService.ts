import { ICoordinates } from "../interface/ICoordinates"
import prismaClient from "../prisma"

export class SaveCoordinatesService {
	execute(coordinates: ICoordinates): void {
		prismaClient.calc_Dados.create({
			data: {
				x_Calc: coordinates.x,
				y_Calc: coordinates.y,
				z_Calc: coordinates.z,
				gnomon_V_id: 0,
				gnomon_R_id: 0,
			}
		})
	}
}