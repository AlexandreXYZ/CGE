import { Request, Response } from "express"
import { GetSavedCoordinatesService } from "../services/GetSavedCoordinatesService"

export class GetSavedCoordinatesController {
    handle(request: Request, response: Response) {
        const getSavedCoordinates = new GetSavedCoordinatesService()

        const savedCoordinates = getSavedCoordinates.execute()

        return response.json(savedCoordinates)
    }
}