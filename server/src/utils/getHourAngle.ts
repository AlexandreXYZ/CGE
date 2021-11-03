import { toRadian } from "./toRadian"

export function getHourAngle({hour, min}) {
    min = min / 60
    hour = (min + hour) - 12

    const angle = hour * 15
    return toRadian(angle)
}