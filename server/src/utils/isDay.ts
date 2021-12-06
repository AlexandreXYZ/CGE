import { ITime } from "../interface/ITime"

export function isDay(time: ITime, sunrise: ITime, sunset: ITime): string {
	if (time.hour > 0 && time.hour < 24) {
		if (time.hour > sunrise.hour && time.hour < sunset.hour) {

			return "day"
		} else {
			if (time.hour === sunrise.hour) {
				if (time.min > sunrise.min) {
					
					return "day"
				} else {
	
					return "dusk"
				}
			} else {
				if (time.hour < sunrise.hour) {

					return "dusk"
				}
				if (time.hour === sunset.hour) {
					if (time.min < sunset.min) {
						
						return "day"
					} else {
		
						return "nigth"
					}
				} else {

					return "nigth"
				}
			}		
		}
	} else {
	
		return
	}	
}