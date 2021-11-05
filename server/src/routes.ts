import { Router } from "express"
import { GetAzimuthAngleController } from "./controllers/GetAzimuthAngleController"
import { GetDifferenceCoordinatesController } from "./controllers/GetDifferenceCoordinatesController"
import { GetElevationAngleController } from "./controllers/GetElevationAngleController"
import { GetSolarCoordinatesController } from "./controllers/GetSolarCoordinatesController"
import { SaveCoordinatesController } from "./controllers/SaveCoordinatesController"

export const router = Router()

const getElevationAngleController = new GetElevationAngleController()
const getAzimuthAngleController = new GetAzimuthAngleController()
const getSolarCoordinatesController = new GetSolarCoordinatesController()
const getDifferenceCoordinatesController = new GetDifferenceCoordinatesController()
const saveCoordinatesController = new SaveCoordinatesController()

router.post('/elevationAngle', getElevationAngleController.handle)
router.post('/azimuthAngle', getAzimuthAngleController.handle)
router.post('/solarCoordinates', getSolarCoordinatesController.handle)
router.post('/differenceCoordinates', getDifferenceCoordinatesController.handle)

router.post('/saveCoordinates', saveCoordinatesController.handle)