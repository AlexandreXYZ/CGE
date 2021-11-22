import { ITime } from "../interface/ITime"
import { fixLongitude } from "../utils/fixLongitude"
import { getDayLength } from "../utils/getDayLength"
import { toDegree } from "../utils/toDegree"

export class GetSunriseService {
	execute(latitude: number, longitude: number, sequentialDay: number):ITime {
		const dayLength = getDayLength(latitude, sequentialDay)
		const decimalSunrise = 12 - (toDegree(dayLength) / 2)

		const sunrise = {
			hour: 0,
			min: 0,
			seg: 0
		}
		sunrise.hour = Math.trunc(decimalSunrise)
		sunrise.min = Math.abs((decimalSunrise - sunrise.hour) * 60)
		sunrise.seg = Math.abs((sunrise.min - Math.trunc(sunrise.min)) * 60)		

		const sunriseAdjusted = fixLongitude(longitude, sunrise)
		return sunriseAdjusted
	}
}