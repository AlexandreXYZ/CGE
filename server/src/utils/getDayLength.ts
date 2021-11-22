import { getDeclination } from "./getDeclination"
import { toRadian } from "./toRadian"

export function getDayLength(latitude, sequentialDay) {
    const dayLength = 2 / 15 * Math.acos(-Math.tan(toRadian(latitude)) * Math.tan(getDeclination(sequentialDay)));
    return dayLength
}