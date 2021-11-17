import prismaClient from "../prisma"

export class GetSavedCoordinatesService {
	async execute(num = 5) {
		const coordsReal = await prismaClient.gnomon_R.findMany({
			take: num,
			orderBy: {
				date: 'desc'
			}
		})

		const coordsVirtual = await prismaClient.gnomon_V.findMany({
			take: num,
			orderBy: {
				date: 'desc'
			}
		})

		const coordsDifference = await prismaClient.calc_Dados.findMany({
			take: num,
			orderBy: {
				date: 'desc'
			}
		})

		return {
			coordsReal: coordsReal,
			coordsVirtual: coordsVirtual,
			coordsDifference: coordsDifference
		}		
	}
}