import { Request, Response } from "express"
import { IAllCoordinates } from "../interface/ICoordinates"
import { GetDatesService } from "../services/GetDatesService"
import { GetSunriseService } from "../services/GetSunriseService"
import { GetSunsetService } from "../services/GetSunsetService"
import { LoopGetAllCoordinatesService } from "../services/LoopGetAllCoordinatesService"
import { isDay } from "../utils/isDay"

export class GetCoordinatesWithTimeController {
	async handle(request: Request, response: Response) {
		try {
			const ifc = {
				lat: -29.101912006,
				lng: -49.6385408084
			}

			const { latitude = ifc.lat, longitude = ifc.lng, dateISO } = request.body
			
			const getDatesService = new GetDatesService()
			const getSunriseService = new GetSunriseService()
			const getSunsetService = new GetSunsetService()
			const loopGetAllCoordinatesService = new LoopGetAllCoordinatesService()

			const { sequentialDay, date, time } = getDatesService.localDate(dateISO)
			const sunrise = getSunriseService.execute(latitude, longitude, sequentialDay)
			const sunset = getSunsetService.execute(latitude, longitude, sequentialDay)
			const solarCicle = isDay(time, sunrise, sunset)

			var groupedAllCoordinates: IAllCoordinates[]
			if (solarCicle === "day") {
				groupedAllCoordinates = await loopGetAllCoordinatesService.execute({
					timeStart: sunrise,
					timeEnd: time
				},
				{
					sequentialDay,
					latitude,
					time,
					date
				})
			} else {
				if (solarCicle === "nigth") {
					groupedAllCoordinates = await loopGetAllCoordinatesService.execute({
						timeStart: sunrise,
						timeEnd: sunset
					},
					{
						sequentialDay,
						latitude,
						time,
						date
					})
				} else {
					if (solarCicle === "dusk") {
						
						return response.json("Its dusk! Wait for sunshine.")
					} else {

						return response.json("Invalid time insered!")
					}
				}
			}

			return response.json(groupedAllCoordinates)
		}
		catch(err) {
			throw Error()
		}
	}
}