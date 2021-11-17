import { ICoordinates } from "../interface/ICoordinates"
import { getFormatedCoordinates } from "../utils/getFormatedCoordinates"

export class GetDifferenceCoordinatesService {
	execute(virtualCoordinates: ICoordinates, realCoordinates: ICoordinates): ICoordinates {
		const differenceCoordinates = {
			x: Math.abs(Math.abs(realCoordinates.x) - Math.abs(virtualCoordinates.x)),
			y: Math.abs(Math.abs(realCoordinates.y) - Math.abs(virtualCoordinates.y)),
			z: Math.abs(Math.abs(realCoordinates.z) - Math.abs(virtualCoordinates.z))
		}
	
		return getFormatedCoordinates(differenceCoordinates)
	}
}