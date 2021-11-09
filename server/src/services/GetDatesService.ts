import { IDate } from "../interface/IDate"
import { ITime } from "../interface/ITime"
import { getSequentialDay } from "../utils/getSequentialDay"

export class GetDatesService {
	execute() {
		const date = new Date()
		const today: IDate = {
			day: date.getDate(),
			month: date.getMonth(),
			year: date.getFullYear()
		}

		const sequentialDay = getSequentialDay(today)

		const time: ITime = {
			hour: date.getHours(),
			min: date.getMinutes()
		}

		return { sequentialDay: sequentialDay, time: time }
	}
}