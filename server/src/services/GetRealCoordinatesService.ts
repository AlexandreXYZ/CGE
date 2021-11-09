import { ICoordinates } from "../interface/ICoordinates"
import { getFormatedCoordinates } from "../utils/getFormatedCoordinates"

export class GetRealCoordinatesService {
	execute(virtualCoordinates: ICoordinates): ICoordinates {
		const realCoordinates = {
			x: Math.abs(virtualCoordinates.x - Math.random()) / 10,
			y: Math.abs(virtualCoordinates.y - Math.random()) / 10,
			z: Math.abs(virtualCoordinates.z - Math.random()) / 10
		}

		return getFormatedCoordinates(realCoordinates)
	}
}