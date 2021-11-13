import { IDate } from "../interface/IDate"
import { ITime } from "../interface/ITime"
import { getSequentialDay } from "../utils/getSequentialDay"

export class GetDatesService {
	// Tem muita gambiarra nesse arquivo, pois o Node se buga inteiro quando o assunto é data
	execute(date: IDate, time: ITime) {
		if (!time.seg) {
			time.seg = 0
		}

		const sequentialDay = getSequentialDay(date)

		const dateISO = new Date(date.year, date.month - 1, date.day, time.hour - 2, time.min, time.seg)

		return {sequentialDay: sequentialDay, dateISO: dateISO}
	}

	now() {
		var dateISO = new Date(new Date().toLocaleString("pt-BR", {timeZone: "America/New_York"}))

		const today: IDate = {
			day: dateISO.getDate(),
			month: dateISO.getMonth() + 1,
			year: dateISO.getFullYear()
		}
		
		const sequentialDay = getSequentialDay(today)
		
		const time: ITime = {
			hour: dateISO.getHours() + 2,
			min: dateISO.getMinutes(),
			seg: dateISO.getSeconds()
		}

		return { dateISO: dateISO, sequentialDay: sequentialDay, time: time }
	}
}