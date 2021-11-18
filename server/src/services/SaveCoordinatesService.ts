import { ICoordinates } from "../interface/ICoordinates"
import prismaClient from "../prisma"

export class SaveCoordinatesService {
	async execute(realCoordinates: ICoordinates, virtualCoordinates: ICoordinates, differenceCoordinates: ICoordinates, date: Date) {
		await prismaClient.gnomon_V.create({
			data: {
				x: realCoordinates.x,
				y: realCoordinates.y,
				z: realCoordinates.z,
				date: date
			}
		})

		await prismaClient.gnomon_R.create({
			data: {
				x: virtualCoordinates.x,
				y: virtualCoordinates.y,
				z: virtualCoordinates.z,
				date: date
			}
		})

		await prismaClient.calc_Dados.create({
			data: {
				x: differenceCoordinates.x,
				y: differenceCoordinates.y,
				z: differenceCoordinates.z,
				date: date
			}
		})
	}
}