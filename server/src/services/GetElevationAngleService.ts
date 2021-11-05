import { ITime } from "../interface/ITime"
import { getDeclination } from "../utils/getDeclination"
import { getHourAngle } from "../utils/getHourAngle"
import { toRadian } from "../utils/toRadian"

export class GetElevationAngleService {
	execute(sequentialDay: number, time: ITime, latitude: number): number {
		const hourAngle = getHourAngle(time)
		const declination = getDeclination(sequentialDay)
		latitude = toRadian(latitude)
		
		var elevationAngle = Math.asin(Math.cos(hourAngle) * Math.cos(declination) * Math.cos(latitude) + Math.sin(declination) * Math.sin(latitude))
		elevationAngle = parseFloat(elevationAngle.toFixed(5))

		return elevationAngle
	}
}