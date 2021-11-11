import { Request, Response } from "express"
import { IUserInput } from "../interface/IUserInput"
import { GetAzimuthAngleService } from "../services/GetAzimuthAngleService"
import { GetDatesService } from "../services/GetDatesService"
import { GetElevationAngleService } from "../services/GetElevationAngleService"
import { GetVirtualCoordinatesService } from "../services/GetVirtualCoordinatesService"

export class GetVirtualCoordinatesController {
	handle(request: Request, response: Response) {
		var { sequentialDay, time, latitude }:IUserInput = request.body
		
		if (!sequentialDay || !time) {
			const getDates = new GetDatesService()

			var { sequentialDay, time } = getDates.execute()
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