import { IAllCoordinates } from "../interface/ICoordinates"
import { ITime } from "../interface/ITime"
import { GetAzimuthAngleService } from "./GetAzimuthAngleService"
import { GetDifferenceCoordinatesService } from "./GetDifferenceCoordinatesService"
import { GetElevationAngleService } from "./GetElevationAngleService"
import { GetRealCoordinatesService } from "./GetRealCoordinatesService"
import { GetVirtualCoordinatesService } from "./GetVirtualCoordinatesService"
import { SaveCoordinatesService } from "./SaveCoordinatesService"

export class GetCoordinatesService {
	async execute(
		sequentialDay: number,
		time: ITime,
		latitude: number,
		dateISO: Date
		): Promise<IAllCoordinates> {
		const getElevationAngle = new GetElevationAngleService()
		const getAzimuthAngle = new GetAzimuthAngleService()
		const getVirtualCoordinates = new GetVirtualCoordinatesService()
		const getRealCoordinatesService = new GetRealCoordinatesService()
		const getDifferenceCoordinatesService = new GetDifferenceCoordinatesService()
		const saveCoordinatesService = new SaveCoordinatesService()

		const elevationAngle = getElevationAngle.execute(sequentialDay, time, latitude)
		const azimuthAngle = getAzimuthAngle.execute(sequentialDay, elevationAngle, time, latitude)
		const virtualCoordinates = getVirtualCoordinates.execute(elevationAngle, azimuthAngle)
		const realCoordinates = getRealCoordinatesService.execute(virtualCoordinates)
		const differenceCoordinates = getDifferenceCoordinatesService.execute(virtualCoordinates, realCoordinates)
		// await saveCoordinatesService.execute(virtualCoordinates, realCoordinates, differenceCoordinates, dateISO)

		const allCoordinates: IAllCoordinates = {
			virtualCoordinates: virtualCoordinates,
			realCoordinates: realCoordinates,
			differenceCoordinates: differenceCoordinates
		}

		return allCoordinates
	}
}