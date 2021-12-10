import { IDate } from "../interface/IDate"
import { ITime } from "../interface/ITime"
import { getSequentialDay } from "../utils/getSequentialDay"

export class GetDatesService {
	execute(date: IDate, time: ITime): { sequentialDay: number; dateISO: Date } {
		if (!time.seg) {
			time.seg = 0
		}

		const sequentialDay = getSequentialDay(date)

		const dateISO = new Date(date.year, date.month - 1, date.day, time.hour, time.min, time.seg)

		return { sequentialDay: sequentialDay, dateISO: dateISO }
	}

	localDate(dateISO: Date): { sequentialDay: number, date: IDate, time: ITime, localDateISO: Date } {
		dateISO = new Date(dateISO)
		const today: IDate = {
			day: dateISO.getDate(),
			month: dateISO.getMonth() + 1,
			year: dateISO.getFullYear()
		}
		
		const sequentialDay = getSequentialDay(today)
		
		const time = {
			hour: dateISO.getHours(),
			min: dateISO.getMinutes(),
			seg: dateISO.getSeconds()
		}

		const localDateISO = new Date(dateISO.getFullYear(), dateISO.getMonth(), dateISO.getDate(), dateISO.getHours() - 3, dateISO.getMinutes(), dateISO.getSeconds())

		return { sequentialDay: sequentialDay, date: today, time: time, localDateISO: localDateISO }		
	}
}
