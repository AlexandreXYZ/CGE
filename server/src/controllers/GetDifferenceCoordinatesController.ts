import { Request, Response } from "express"
import { GetAzimuthAngleService } from "../services/GetAzimuthAngleService"
import { GetDifferenceCoordinatesService } from "../services/GetDifferenceCoordinatesService"
import { GetElevationAngleService } from "../services/GetElevationAngleService"
import { GetRealCoordinatesService } from "../services/GetRealCoordinatesService"
import { GetVirtualCoordinatesService } from "../services/GetVirtualCoordinatesService"

export class GetDifferenceCoordinatesController {
	handle(request: Request, response: Response) {
		const { sequentialDay, time, latitude } = request.body

		const getElevationAngle = new GetElevationAngleService()
		const getAzimuthAngle = new GetAzimuthAngleService()
		const getVirtualCoordinates = new GetVirtualCoordinatesService()
		const getRealCoordinatesService = new GetRealCoordinatesService()
		const getDifferenceCoordinatesService = new GetDifferenceCoordinatesService()

		const elevationAngle = getElevationAngle.execute(sequentialDay, time, latitude)
		const azimuthAngle = getAzimuthAngle.execute(sequentialDay, elevationAngle, time, latitude)
		const virtualCoordinates = getVirtualCoordinates.execute(elevationAngle, azimuthAngle)
		const realCoordinates = getRealCoordinatesService.execute(virtualCoordinates)
		const differenceCoordinates = getDifferenceCoordinatesService.execute(virtualCoordinates, realCoordinates)

		return response.json(differenceCoordinates)
	}
}