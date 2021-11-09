import { Request, Response } from "express"
import { GetAzimuthAngleService } from "../services/GetAzimuthAngleService"
import { GetElevationAngleService } from "../services/GetElevationAngleService"
import { GetVirtualCoordinatesService } from "../services/GetVirtualCoordinatesService"

export class GetVirtualCoordinatesController {
	handle(request: Request, response: Response) {
		const { sequentialDay, time, latitude } = request.body

		const getElevationAngle = new GetElevationAngleService()
		const getAzimuthAngle = new GetAzimuthAngleService()
		const getVirtualCoordinates = new GetVirtualCoordinatesService()

		const elevationAngle = getElevationAngle.execute(sequentialDay, time, latitude)
		const azimuthAngle = getAzimuthAngle.execute(sequentialDay, elevationAngle, time, latitude)
		const virtualCoordinates = getVirtualCoordinates.execute(elevationAngle, azimuthAngle)

		return response.json(virtualCoordinates)
	}
}