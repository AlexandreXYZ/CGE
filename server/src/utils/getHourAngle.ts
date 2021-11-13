import { ITime } from "../interface/ITime"
import { toRadian } from "./toRadian"

export function getHourAngle({hour, min, seg}: ITime): number {
	seg = seg / 60
    min = (seg + min) / 60
    hour = (min + hour) - 12

    const angle = hour * 15
    return toRadian(angle)
}