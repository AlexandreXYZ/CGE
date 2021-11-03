import { getDeclination } from "../utils/getDeclination"
import { getHourAngle } from "../utils/getHourAngle"
import { toRadian } from "../utils/toRadian"

interface ITime {
	hour: number,
	min: number
}

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

// ({lat: 3.633056,lng: 6.543333}, {hora: 15,min: 0,seg: 0}, {dia: 29,mes: 10,ano: 2018})

//declination (rad) = -0.2573398621604525
//declination (deg) = -14.744

//elevation (rad) = 0.729263341449354
//elevation (deg) = 41.78

//azimuth (rad) = 4.302243465326511
//azimuth (deg) = 246.50