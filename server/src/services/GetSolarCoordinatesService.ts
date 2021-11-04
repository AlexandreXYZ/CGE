export class GetSolarCoordinatesService {
	execute(elevationAngle: number, azimuthAngle: number) {
		const r = 1
		const cartesianCoords = {
			x: r * Math.cos(elevationAngle) * Math.sin(azimuthAngle),
			y: r * Math.cos(elevationAngle) * Math.cos(azimuthAngle),
			z: r * Math.sin(elevationAngle)
		}

		const floatPoints = 5
		const formatedCoords = {
			x: parseFloat(cartesianCoords.x.toFixed(floatPoints)),
			y: parseFloat(cartesianCoords.y.toFixed(floatPoints)),
			z: parseFloat(cartesianCoords.z.toFixed(floatPoints))
		}

		return formatedCoords
	}
}