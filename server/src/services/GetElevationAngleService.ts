import { getDeclination } from "../utils/getDeclination"

export class GetElevationAngleService {
	execute(sequentialDay: number, hourAngle: number, latitude: number): number {
		const declination = getDeclination(sequentialDay)

		var elevationAngle = Math.asin(Math.cos(hourAngle) * Math.cos(declination) * Math.cos(latitude) + Math.sin(declination) * Math.sin(latitude))
		elevationAngle = parseFloat(elevationAngle.toFixed(5))

		return elevationAngle
	}
}