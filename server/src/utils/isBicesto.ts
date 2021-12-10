export function isBicesto(year: number): boolean {
    var step1 = year % 4

    if (step1 == 0) {
        var step2 = year % 100

        if (step2 == 0) {
            var step3 = year % 400

            if (step3 == 0) {

                return true
            } else {

                return false
            }
        } else {

            return true
        }
    } else {
		
        return false
    }
}