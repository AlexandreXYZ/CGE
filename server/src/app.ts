import express, { Request, Response } from "express"
import cors from "cors"

import { router } from "./routes"

const app = express()
app.use(cors())

app.use(express.json())
app.use(router)
app.use((err: Error, request: Request, response: Response) => {
	if (err instanceof Error) {
		return response.status(400).json({
			error: err.message
		})
	}

	return response.status(400).json({
		status: "error",
		message: "Internal Server Error"
	})
})

app.listen(4000, () => {
	console.log("Server running on port 4000")
})