import { Request, Response } from "express"
import { IUserInput } from "../interface/IUserInput"
import { GetCoordinatesService } from "../services/GetCoordinatesService"
import { GetDatesService } from "../services/GetDatesService"

export class GetCoordinatesController {
	async handle(request: Request, response: Response) {
		var { date, time, latitude }:IUserInput = request.body
		
		const getDates = new GetDatesService()

		if (date && time) {
			var { dateISO, sequentialDay } = getDates.execute(date, time)
		} else {
			var { dateISO, sequentialDay, time } = getDates.now()
		}

		const getCoordinates = new GetCoordinatesService()

		const allCoordinates = await getCoordinates.execute(sequentialDay, time, latitude, dateISO)

		return response.json(allCoordinates)
	}
}