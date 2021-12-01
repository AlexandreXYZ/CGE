import { Router } from "express"
import { GetSolarEclipticController } from "./controllers/GetSolarEclipticController"
import { GetVirtualCoordinatesController } from "./controllers/GetVirtualCoordinatesController"
import { GetCoordinatesController } from "./controllers/GetCoordinatesController"
import { GetCoordinatesWithTimeController } from "./controllers/GetCoordinatesWithTimeController"
import { GetCoordinatesNowController } from "./controllers/GetCoordinatesNowController"
import { GetSavedCoordinatesController } from "./controllers/GetSavedCoordinatesController"

export const router = Router()

const getSolarEclipticController = new GetSolarEclipticController()
const getVirtualCoordinatesController = new GetVirtualCoordinatesController()
const getCoordinatesController = new GetCoordinatesController()
const getCoordinatesWithTimeController = new GetCoordinatesWithTimeController()
const getCoordinatesNowController = new GetCoordinatesNowController()
const getSavedCoordinatesController = new GetSavedCoordinatesController()

router.post('/ecliptic', getSolarEclipticController.handle)
router.post('/virtualCoordinates', getVirtualCoordinatesController.handle)
router.post('/coordinates', getCoordinatesController.handle)
router.post('/coordinates/time', getCoordinatesWithTimeController.handle)
router.post('/coordinates/now', getCoordinatesNowController.handle)
router.get('/savedCoordinates', getSavedCoordinatesController.handle)