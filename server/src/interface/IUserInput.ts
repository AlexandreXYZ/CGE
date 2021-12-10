import { IDate } from "./IDate"
import { ITime } from "./ITime"

export interface IUserInput {
	date?: IDate,
	time?: ITime,
	latitude: number
}