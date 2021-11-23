import { Router } from "express"
import { GetCoordinatesController } from "./controllers/GetCoordinatesController"
import { GetSavedCoordinatesController } from "./controllers/GetSavedCoordinatesController"
import { GetSolarEclipticController } from "./controllers/GetSolarEclipticController"
import { GetCoordinatesWithTimeController } from "./controllers/GetCoordinatesWithTimeController"
import { GetVirtualCoordinatesController } from "./controllers/GetVirtualCoordinatesController"

export const router = Router()

const getSolarEclipticController = new GetSolarEclipticController()
const getVirtualCoordinatesController = new GetVirtualCoordinatesController()
const getCoordinatesController = new GetCoordinatesController()
const getSavedCoordinatesController = new GetSavedCoordinatesController()
const getCoordinatesWithTimeController = new GetCoordinatesWithTimeController()

router.post('/ecliptic', getSolarEclipticController.handle)
router.post('/virtualCoordinates', getVirtualCoordinatesController.handle)
router.post('/coordinates', getCoordinatesController.handle)
router.post('/coordinates/time', getCoordinatesWithTimeController.handle)
// router.post('/coordinates/now', getCoordinatesNowController.handle)
router.get('/coordinates', getSavedCoordinatesController.handle)