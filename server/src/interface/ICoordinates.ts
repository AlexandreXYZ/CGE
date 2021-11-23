import { ITime } from "./ITime"

export interface ICoordinates {
    x: number,
    y: number,
    z: number
}

export interface IAllCoordinates {
	virtualCoordinates: {
		x: number,
		y: number,
		z: number
	}
	realCoordinates: {
		x: number,
		y: number,
		z: number
	}
	differenceCoordinates: {
		x: number,
		y: number,
		z: number
	}
	time?: ITime
}