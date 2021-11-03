import { Router } from 'express'
import { GetElevationAngleController } from './controllers/GetElevationAngleController'

export const router = Router()

const getElevationAngleController = new GetElevationAngleController()

router.post('/elevationAngle', getElevationAngleController.handle)