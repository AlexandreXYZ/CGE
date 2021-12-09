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

	now(): { dateISO: Date; sequentialDay: number; time: ITime } {
		var dateISO = new Date(new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"}))

		const today: IDate = {
			day: dateISO.getDate() +1,
			month: dateISO.getMonth() + 1,
			year: dateISO.getFullYear()
		}
		
		const sequentialDay = getSequentialDay(today)
		
		const time: ITime = {
			hour: dateISO.getHours(),
			min: dateISO.getMinutes(),
			seg: dateISO.getSeconds()
		}

		return { dateISO: dateISO, sequentialDay: sequentialDay, time: time }
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
