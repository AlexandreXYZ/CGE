import { Request, Response } from "express"
import { GetElevationAngleService } from "../services/GetElevationAngleService"

export class GetElevationAngleController {
	async handle(request: Request, response: Response) {
		const { sequentialDay, hourAngle, latitude } = request.body

		const getElevationAngle = new GetElevationAngleService()

		const elevationAngle = getElevationAngle.execute(sequentialDay, hourAngle, latitude)

		return response.json(elevationAngle)
	}
}