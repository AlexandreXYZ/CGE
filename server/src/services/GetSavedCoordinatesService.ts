import { mySqlGetCoordinatesRepository } from "../infra/repository/mySqlGetCoordinatesRepository"

export class GetSavedCoordinatesService {
	async execute(num = 5) {
		const getCoordinatesRepository = new mySqlGetCoordinatesRepository()

		const realCoordinates = await getCoordinatesRepository.getCoordinates("gnomon_R", num)
		const virtualCoordinates = await getCoordinatesRepository.getCoordinates("gnomon_V", num)
		const differenceCoordinates = await getCoordinatesRepository.getCoordinates("calc_Dados", num)
		
		return {
			realCoordinates: realCoordinates,
			virtualCoordinates: virtualCoordinates,
			differenceCoordinates: differenceCoordinates
		}		
	}
}