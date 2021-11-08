import { getFormatedCoordinates } from "../utils/getFormatedCoordinates"

export class GetSolarCoordinatesService {
	execute(elevationAngle: number, azimuthAngle: number) {
		const r = 1
		const cartesianCoords = {
			x: r * Math.cos(elevationAngle) * Math.sin(azimuthAngle),
			y: r * Math.cos(elevationAngle) * Math.cos(azimuthAngle),
			z: r * Math.sin(elevationAngle)
		}

		return getFormatedCoordinates(cartesianCoords)
	}
}