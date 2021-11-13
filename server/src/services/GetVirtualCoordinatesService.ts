import { ICoordinates } from "../interface/ICoordinates"
import { getFormatedCoordinates } from "../utils/getFormatedCoordinates"

export class GetVirtualCoordinatesService {
	execute(elevationAngle: number, azimuthAngle: number): ICoordinates {
		const r = 1
		const cartesianCoords = {
			x: r * Math.cos(elevationAngle) * Math.sin(azimuthAngle),
			y: r * Math.cos(elevationAngle) * Math.cos(azimuthAngle),
			z: r * Math.sin(elevationAngle)
		}

		return getFormatedCoordinates(cartesianCoords)
	}
}