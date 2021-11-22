import { ITime } from "../interface/ITime"
import { fixLongitude } from "../utils/fixLongitude"
import { getDayLength } from "../utils/getDayLength"
import { toDegree } from "../utils/toDegree"

export class GetSunsetService {
	execute(latitude: number, longitude: number, sequentialDay: number):ITime {
		const dayLength = getDayLength(latitude, sequentialDay)
		const decimalSunrise = 12 + (toDegree(dayLength) / 2)

		const sunset = {
			hour: 0,
			min: 0,
			seg: 0
		}
		sunset.hour = Math.trunc(decimalSunrise)
		sunset.min = Math.abs((decimalSunrise - sunset.hour) * 60)
		sunset.seg = Math.abs((sunset.min - Math.trunc(sunset.min)) * 60)		

		const sunsetAdjusted = fixLongitude(longitude, sunset)
		return sunsetAdjusted
	}
}