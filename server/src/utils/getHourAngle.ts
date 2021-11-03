import { ITime } from "../interface/ITime"
import { toRadian } from "./toRadian"

export function getHourAngle({hour, min}: ITime): number {
    min = min / 60
    hour = (min + hour) - 12

    const angle = hour * 15
    return toRadian(angle)
}