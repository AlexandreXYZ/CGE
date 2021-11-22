import { Request, Response } from "express"
import { GetDatesService } from "../services/GetDatesService"
import { GetSunriseService } from "../services/GetSunriseService"
import { GetSunsetService } from "../services/GetSunsetService"

export class GetSunriseSunsetController {
	handle(request: Request, response: Response) {
		const ifc = {
			lat: -29.101912006,
			lng: -49.6385408084
		}

		const { latitude = ifc.lat, longitude = ifc.lng, dateISO } = request.body
		
		const getDatesService = new GetDatesService()
		const getSunriseService = new GetSunriseService()
		const getSunsetService = new GetSunsetService()

		const { sequentialDay } = getDatesService.sequentialDay(dateISO)
		const sunrise = getSunriseService.execute(latitude, longitude, sequentialDay)
		const sunset = getSunsetService.execute(latitude, longitude, sequentialDay)

		return response.json(sunset)
	}
}