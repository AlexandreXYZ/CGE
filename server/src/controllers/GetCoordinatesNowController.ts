import { Request, Response } from "express"
import { GetCoordinatesService } from "../services/GetCoordinatesService"
import { GetDatesService } from "../services/GetDatesService"

export class GetCoordinatesNowController {
	async handle(request: Request, response: Response) {
		try {
			const { dateISO } = request.body
			
			const latitude = -29.101912006
			const getDatesService = new GetDatesService()
			const getCoordinatesService = new GetCoordinatesService()

			const { sequentialDay, time } = getDatesService.localDate(dateISO)
			const coordinates = await getCoordinatesService.execute(sequentialDay, time, latitude, dateISO)
			coordinates.time = time

			return response.json(coordinates)
		}
		catch(err) {
			throw Error(err)
		}
	}
}