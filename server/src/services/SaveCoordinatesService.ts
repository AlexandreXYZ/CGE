import { mySqlGetCoordinatesRepository } from "../infra/repository/mySqlGetCoordinatesRepository"
import { mySqlSaveCoordinatesRepository } from "../infra/repository/mySqlSaveCoordinatesRepository"
import { ICoordinates } from "../interface/ICoordinates"
import { GetDatesService } from "./GetDatesService"

export class SaveCoordinatesService {
	async execute(realCoordinates: ICoordinates, virtualCoordinates: ICoordinates, differenceCoordinates, date: Date): Promise<void> {
		date = new Date(date)

		const saveCoordinatesRepository = new mySqlSaveCoordinatesRepository(date)
		const getCoordinatesRepository = new mySqlGetCoordinatesRepository()
		const datesService = new GetDatesService()
		
		const { localDateISO } = datesService.localDate(date)

		const datePreExistent = await getCoordinatesRepository.checkDate(localDateISO)
		
		if (!datePreExistent) {
			await saveCoordinatesRepository.gnomon_R(realCoordinates)
			await saveCoordinatesRepository.gnomon_V(virtualCoordinates)
			await saveCoordinatesRepository.calc_Dados(differenceCoordinates)
		}
	}
}