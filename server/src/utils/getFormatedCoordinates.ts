import { ICoordinates } from "../interface/ICoordinates"

export function getFormatedCoordinates(coordinates: ICoordinates): ICoordinates {
	const floatPoints = 5
	const formatedCoordinates = {
		x: parseFloat(coordinates.x.toFixed(floatPoints)),
		y: parseFloat(coordinates.y.toFixed(floatPoints)),
		z: parseFloat(coordinates.z.toFixed(floatPoints))
	}

	return formatedCoordinates
}