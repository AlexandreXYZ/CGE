import { Router } from 'express'
import { GetAzimuthAngleController } from './controllers/GetAzimuthAngleController'
import { GetElevationAngleController } from './controllers/GetElevationAngleController'

export const router = Router()

const getElevationAngleController = new GetElevationAngleController()
const getAzimuthAngleController = new GetAzimuthAngleController()

router.post('/elevationAngle', getElevationAngleController.handle)
router.post('/azimuthAngle', getAzimuthAngleController.handle)