import { Request, Response } from "express"
import { IUserInput } from "../interface/IUserInput"
import { GetAzimuthAngleService } from "../services/GetAzimuthAngleService"
import { GetDatesService } from "../services/GetDatesService"
import { GetDifferenceCoordinatesService } from "../services/GetDifferenceCoordinatesService"
import { GetElevationAngleService } from "../services/GetElevationAngleService"
import { GetRealCoordinatesService } from "../services/GetRealCoordinatesService"
import { GetVirtualCoordinatesService } from "../services/GetVirtualCoordinatesService"
import { SaveCoordinatesService } from "../services/SaveCoordinatesService"

export class GetAllCoordinatesController {
	handle(request: Request, response: Response) {
		var { date, time, latitude }:IUserInput = request.body
		
		const getDates = new GetDatesService()

		if (date && time) {
			var { dateISO, sequentialDay } = getDates.execute(date, time)
		} else {
			var { dateISO, sequentialDay, time } = getDates.now()
		}

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
		const saveCoordinates = saveCoordinatesService.execute(virtualCoordinates, realCoordinates, differenceCoordinates, dateISO)

		const _response = {
			virtualCoordinates: virtualCoordinates,
			realCoordinates: realCoordinates,
			differenceCoordinates: differenceCoordinates
		}

		return response.json(_response)
	}
}