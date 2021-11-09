import prismaClient from "../prisma";

export class GetSavedCoordinatesService {
	async execute() {
		const coordsReal = await prismaClient.gnomon_R.findMany()
		const coordsVirtual = await prismaClient.gnomon_V.findMany()
		const coordsDifference = await prismaClient.calc_Dados.findMany()
		
		return {
			coordsReal: coordsReal,
			coordsVirtual: coordsVirtual,
			coordsDifference: coordsDifference
		}
	}
}