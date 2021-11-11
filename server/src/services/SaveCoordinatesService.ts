import { ICoordinates } from "../interface/ICoordinates"
import prismaClient from "../prisma"

export class SaveCoordinatesService {
	async execute(realCoordinates: ICoordinates, virtualCoordinates: ICoordinates, differenceCoordinates: ICoordinates, date: Date) {
		await prismaClient.gnomon_V.create({
			data: {
				x_V: realCoordinates.x,
				y_V: realCoordinates.y,
				z_V: realCoordinates.z,
				date: date
			}
		})

		await prismaClient.gnomon_R.create({
			data: {
				x_R: virtualCoordinates.x,
				y_R: virtualCoordinates.y,
				z_R: virtualCoordinates.z,
				date: date
			}
		})

		await prismaClient.calc_Dados.create({
			data: {
				x_Calc: differenceCoordinates.x,
				y_Calc: differenceCoordinates.y,
				z_Calc: differenceCoordinates.z,
				date_Calc: date
			}
		})
	}
}