import { toRadian } from "./toRadian"

export function getDeclination(sequentialDay: number): number {
	const declination = 23.45 * Math.sin(toRadian((360 / 365) * (284 + sequentialDay)))

	return toRadian(declination)
}