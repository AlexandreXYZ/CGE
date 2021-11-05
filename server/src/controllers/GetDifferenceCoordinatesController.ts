import { Request, Response } from "express"
import { GetAzimuthAngleService } from "../services/GetAzimuthAngleService"
import { GetDifferenceCoordinatesService } from "../services/GetDifferenceCoordinatesService"
import { GetElevationAngleService } from "../services/GetElevationAngleService"
import { GetSolarCoordinatesService } from "../services/GetSolarCoordinatesService"

export class GetDifferenceCoordinatesController {
	handle(request: Request, response: Response) {
		const { sequentialDay, time, latitude } = request.body

		const getElevationAngle = new GetElevationAngleService()
		const getAzimuthAngle = new GetAzimuthAngleService()
		const getSolarCoordinates = new GetSolarCoordinatesService()
		const getDifferenceCoordinatesService = new GetDifferenceCoordinatesService()

		const elevationAngle = getElevationAngle.execute(sequentialDay, time, latitude)
		const azimuthAngle = getAzimuthAngle.execute(sequentialDay, elevationAngle, time, latitude)
		const solarCoordinates = getSolarCoordinates.execute(elevationAngle, azimuthAngle)
		const differenceCoordinates = getDifferenceCoordinatesService.execute(solarCoordinates)

		return response.json(differenceCoordinates)
	}
}