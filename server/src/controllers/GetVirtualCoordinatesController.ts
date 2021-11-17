import { Request, Response } from "express"
import { IUserInput } from "../interface/IUserInput"
import { GetAzimuthAngleService } from "../services/GetAzimuthAngleService"
import { GetDatesService } from "../services/GetDatesService"
import { GetElevationAngleService } from "../services/GetElevationAngleService"
import { GetVirtualCoordinatesService } from "../services/GetVirtualCoordinatesService"

export class GetVirtualCoordinatesController {
	handle(request: Request, response: Response) {
		var { date, time, latitude }:IUserInput = request.body
		
		const getDates = new GetDatesService()

		if (date && time) {
			var { sequentialDay } = getDates.execute(date, time)
		} else {
			var { sequentialDay, time } = getDates.now()
		}

		const getElevationAngle = new GetElevationAngleService()
		const getAzimuthAngle = new GetAzimuthAngleService()
		const getVirtualCoordinates = new GetVirtualCoordinatesService()

		const elevationAngle = getElevationAngle.execute(sequentialDay, time, latitude)
		const azimuthAngle = getAzimuthAngle.execute(sequentialDay, elevationAngle, time, latitude)
		const virtualCoordinates = getVirtualCoordinates.execute(elevationAngle, azimuthAngle)

		return response.json(virtualCoordinates)
	}
}