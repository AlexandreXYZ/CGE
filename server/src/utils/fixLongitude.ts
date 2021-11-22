import { ITime } from "../interface/ITime"

export function fixLongitude(longitude: number, scheduleOriginal: ITime): ITime {
    var timezone = longitude + (15 - (longitude % 15)) % 15
    if ((timezone - longitude) > 7.5) {
        timezone -= 15
    }

    const differenceDegree = longitude - timezone
    const scheduleDifference: ITime = {
		hour: 0,
		min: 0,
		seg: 0
	}
	scheduleDifference.min = (differenceDegree * 60) / 15
	scheduleDifference.seg = Math.round((scheduleDifference.min - Math.trunc(scheduleDifference.min)) * 60)
    
    if ((Math.round(scheduleOriginal.seg + scheduleDifference.seg)) > 60) {
        scheduleDifference.seg -= 60
    }
    if (Math.trunc(scheduleOriginal.min + scheduleDifference.min) > 59) {
        scheduleDifference.hour += 1
        scheduleDifference.min -= 60
    }

    const scheduleAdjusted = {
        hour: Math.abs(scheduleOriginal.hour + scheduleDifference.hour),
        min: Math.abs(Math.trunc(scheduleOriginal.min + scheduleDifference.min)),
        seg: Math.abs(Math.round(scheduleOriginal.seg + scheduleDifference.seg))
    }

    return scheduleAdjusted
}