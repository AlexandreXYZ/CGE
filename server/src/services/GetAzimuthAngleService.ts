import { ITime } from "../interface/ITime"
import { getDeclination } from "../utils/getDeclination"
import { getHourAngle } from "../utils/getHourAngle"
import { toRadian } from "../utils/toRadian"

export class GetAzimuthAngleService {
	execute(sequentialDay: number, elevationAngle: number, time: ITime, latitude: number): number {
		const hourAngle = getHourAngle(time)
		const declination = getDeclination(sequentialDay)
		latitude = toRadian(latitude)

		var azimuthAngle = (Math.sin(declination) - Math.sin(elevationAngle) * Math.sin(latitude)) / (Math.cos(elevationAngle) * Math.cos(latitude))
		if (azimuthAngle > 1 || azimuthAngle < -1) {
			azimuthAngle = Math.trunc(azimuthAngle)
		}

		azimuthAngle = Math.acos(azimuthAngle)
		if (hourAngle > 0) {
			azimuthAngle = toRadian(360) - azimuthAngle;
		}

		azimuthAngle = parseFloat(azimuthAngle.toFixed(5))

		return azimuthAngle
	}
}