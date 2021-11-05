import { ICoordinates } from "../interface/ICoordinates"
import { getFormatedCorrdinates } from "../utils/getFormatedCoordinates"

export class GetDifferenceCoordinatesService {
	execute(solarCoordinates: ICoordinates) {
		const simulatedCoordinates: ICoordinates = {
			x: Math.abs(solarCoordinates.x - Math.random()) / 10,
			y: Math.abs(solarCoordinates.y - Math.random()) / 10,
			z: Math.abs(solarCoordinates.z - Math.random()) / 10
		}

		const differenceCoordinates: ICoordinates = {
			x: Math.abs(Math.abs(simulatedCoordinates.x) - Math.abs(solarCoordinates.x)),
			y: Math.abs(Math.abs(simulatedCoordinates.y) - Math.abs(solarCoordinates.y)),
			z: Math.abs(Math.abs(simulatedCoordinates.z) - Math.abs(solarCoordinates.z))
		}
	
		return getFormatedCorrdinates(differenceCoordinates)
	}
}