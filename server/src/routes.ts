import { Router } from "express"
import { GetAllCoordinatesController } from "./controllers/GetAllCoordinatesController"
import { GetDifferenceCoordinatesController } from "./controllers/GetDifferenceCoordinatesController"
import { GetSavedCoordinatesController } from "./controllers/GetSavedCoordinatesController"
import { GetVirtualCoordinatesController } from "./controllers/GetVirtualCoordinatesController"

export const router = Router()

const getVirtualCoordinatesController = new GetVirtualCoordinatesController()
const getDifferenceCoordinatesController = new GetDifferenceCoordinatesController()
const getAllCoordinatesController = new GetAllCoordinatesController()

const getSavedCoordinatesController = new GetSavedCoordinatesController()

router.post('/virtualCoordinates', getVirtualCoordinatesController.handle)
router.post('/differenceCoordinates', getDifferenceCoordinatesController.handle)
router.post('/coordinates', getAllCoordinatesController.handle)

router.get('/coordinates', getSavedCoordinatesController.handle)