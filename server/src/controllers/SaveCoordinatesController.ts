import { Request, Response } from "express"
import { SaveCoordinatesService } from "../services/SaveCoordinatesService"

export class SaveCoordinatesController {
	handle(request: Request, response: Response) {
		const { x, y, z } = request.body

		const saveCoordinates = new SaveCoordinatesService()

		const save = saveCoordinates.execute({x: x, y: y, z: z})
	}
}