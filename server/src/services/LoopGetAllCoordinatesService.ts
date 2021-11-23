import { IAllCoordinates } from "../interface/ICoordinates"
import { IPropsCGE } from "../interface/IPropsCGE"
import { IAllTimes } from "../interface/ITime"
import { GetCoordinatesService } from "./GetCoordinatesService"

export class LoopGetAllCoordinatesService {
	async execute({timeStart, timeEnd}: IAllTimes, propsCGE: IPropsCGE): Promise<IAllCoordinates[]> {
		timeStart.min = Math.round(timeStart.min / 3)
		timeEnd.min = Math.round(timeEnd.min / 3)
		
		const getCoordinates = new GetCoordinatesService()
				
		var groupedAllCoordinates = []
		function groupeCoordinates(allCoordinates: IAllCoordinates): void {
			groupedAllCoordinates.push(allCoordinates)
		}

		while ((timeStart.hour === timeEnd.hour && timeStart.min != timeEnd.min) || timeStart.hour != timeEnd.hour) {
			propsCGE.time = {
				hour: timeStart.hour,
				min: timeStart.min * 3 + 1,
				seg: propsCGE.time.seg
			}

			var allCoordinates = await getCoordinates.execute(
				propsCGE.sequentialDay,
				propsCGE.time,
				propsCGE.latitude,
				propsCGE.dateISO
				)

			allCoordinates.time = propsCGE.time

			groupeCoordinates(allCoordinates)

			timeStart.min += 1
			if (timeStart.min >= 20) {
				timeStart.min -= 20
				timeStart.hour += 1
			}
		}

		return groupedAllCoordinates
	}
}