import { IDate } from "../interface/IDate"
import { isBicesto } from "./isBicesto"

export function getSequentialDay(date: IDate): number {
	var feb = (isBicesto(date.year) == true) ? 28 : 29

	switch (date.month) {
		case 1:
			var totalMonth = 0
			break
		case 2:
			var totalMonth = 31
			break
		case 3:
			var totalMonth = 31 + feb
			break
		case 4:
			var totalMonth = 31 + feb + 31
			break
		case 5:
			var totalMonth = 31 + feb + 31 + 30
			break
		case 6:
			var totalMonth = 31 + feb + 31 + 30 + 31
			break
		case 7:
			var totalMonth = 31 + feb + 31 + 30 + 31 + 30
			break
		case 8:
			var totalMonth = 31 + feb + 31 + 30 + 31 + 30 + 31
			break
		case 9:
			var totalMonth = 31 + feb + 31 + 30 + 31 + 30 + 31 + 31
			break
		case 10:
			var totalMonth = 31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30
			break
		case 11:
			var totalMonth = 31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31
			break
		case 12:
			var totalMonth = 31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30
			break
		default:
			var totalMonth = 0
			break
	}
	
	return date.day + totalMonth
}