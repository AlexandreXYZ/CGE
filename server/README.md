## API Requests
Request | Method | Route URI | Query parameters | Body | Response
--- | --- | --- | --- | --- | ---
Elevation Angle | POST | /elevationAngle | --- | { "sequentialDay": number, "time": { "hour": number, "min": number }, "latitude": number } | { "elevationAngle": number }
Azimuth Angle | POST | /azimuthAngle | --- | { "sequentialDay": number, "elevationAngle": number, "time": { "hour": number, "min": number }, "latitude": number } | { "azimuthAngle": number }
Solar Coordinates | POST | /solarCoordinates | --- | { "sequentialDay": number, "time": { "hour": number, "min": number }, "latitude": number } | { "x": number, "y": number, "z": number }
Difference Coordinates | POST | /differenceCoordinates | --- | { "sequentialDay": number, "time": { "hour": number, "min": number }, "latitude": number } | { "x": number, "y": number, "z": number }
