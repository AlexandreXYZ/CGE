import { Router } from "express"
import { GetCoordinatesWithTimeController } from "./controllers/GetCoordinatesWithTimeController"
import { GetCoordinatesNowController } from "./controllers/GetCoordinatesNowController"
import { GetSavedCoordinatesController } from "./controllers/GetSavedCoordinatesController"

export const router = Router()

const getCoordinatesWithTimeController = new GetCoordinatesWithTimeController()
const getCoordinatesNowController = new GetCoordinatesNowController()
const getSavedCoordinatesController = new GetSavedCoordinatesController()

router.post("/coordinates/time", getCoordinatesWithTimeController.handle)
router.post("/coordinates/now", getCoordinatesNowController.handle)
router.get("/savedCoordinates", getSavedCoordinatesController.handle)