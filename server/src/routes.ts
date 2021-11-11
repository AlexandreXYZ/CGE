import { Router } from "express"
import { GetAllCoordinatesController } from "./controllers/GetAllCoordinatesController"
import { GetSavedCoordinatesController } from "./controllers/GetSavedCoordinatesController"
import { GetSolarEclipticController } from "./controllers/GetSolarEclipticController"
import { GetVirtualCoordinatesController } from "./controllers/GetVirtualCoordinatesController"

export const router = Router()

const getSolarEclipticController = new GetSolarEclipticController()
const getVirtualCoordinatesController = new GetVirtualCoordinatesController()
const getAllCoordinatesController = new GetAllCoordinatesController()
const getSavedCoordinatesController = new GetSavedCoordinatesController()

router.post('/ecliptic', getSolarEclipticController.handle)
router.post('/virtualCoordinates', getVirtualCoordinatesController.handle)
router.post('/coordinates', getAllCoordinatesController.handle)
router.get('/coordinates', getSavedCoordinatesController.handle)