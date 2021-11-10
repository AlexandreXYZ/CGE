import { Request, Response } from "express"
import { GetSavedCoordinatesService } from "../services/GetSavedCoordinatesService"

export class GetSavedCoordinatesController {
    async handle(request: Request, response: Response) {
        const { num } = request.query

        const getSavedCoordinates = new GetSavedCoordinatesService()

        const savedCoordinates = await getSavedCoordinates.execute(parseInt(num.toString()))

        return response.json(savedCoordinates)
    }
}