import { Router } from 'express'
import { GetAzimuthAngleController } from './controllers/GetAzimuthAngleController'
import { GetElevationAngleController } from './controllers/GetElevationAngleController'
import { GetSolarCoordinatesController } from './controllers/GetSolarCoordinatesController'

export const router = Router()

const getElevationAngleController = new GetElevationAngleController()
const getAzimuthAngleController = new GetAzimuthAngleController()
const getSolarCoordinatesController = new GetSolarCoordinatesController()

router.post('/elevationAngle', getElevationAngleController.handle)
router.post('/azimuthAngle', getAzimuthAngleController.handle)
router.post('/solarCoordinates', getSolarCoordinatesController.handle)