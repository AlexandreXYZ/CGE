import { Request, Response } from "express"
import { GetAzimuthAngleService } from "../services/GetAzimuthAngleService"

export class GetAzimuthAngleController {
	async handle(request: Request, response: Response) {
		const { sequentialDay, elevationAngle, time, latitude } = request.body
			
		const getAzimuthAngle = new GetAzimuthAngleService()

		const azimuthAngle = getAzimuthAngle.execute(sequentialDay, elevationAngle, time, latitude)

		return response.json(azimuthAngle)
	}
}