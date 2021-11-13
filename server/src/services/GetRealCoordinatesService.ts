import { ICoordinates } from "../interface/ICoordinates"
import { getFormatedCoordinates } from "../utils/getFormatedCoordinates"

export class GetRealCoordinatesService {
	execute(virtualCoordinates: ICoordinates): ICoordinates {
		const realCoordinates = {
			x: virtualCoordinates.x + virtualCoordinates.x * (Math.random() / 10),
			y: virtualCoordinates.y + virtualCoordinates.y * (Math.random() / 10),
			z: virtualCoordinates.z + virtualCoordinates.z * (Math.random() / 10)
		}

		return getFormatedCoordinates(realCoordinates)
	}
}