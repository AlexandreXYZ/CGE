export interface ITime {
	hour: number,
	min: number,
	seg?: number
}

export interface IAllTimes {
	timeStart: {
		hour: number,
		min: number
	}
	timeEnd: {
		hour: number,
		min: number
	}
}