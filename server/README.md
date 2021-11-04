## API Requests
Request | Method | Route URI | Query parameters | Body | Response
--- | --- | --- | --- | --- | ---
Elevation Angle | POST | /elevationAngle | --- | { <br> "sequentialDay": number, <br> "time": { <br> "hour": number, <br> "min": number <br>}, <br> "latitude": number <br> } | { <br>"elevationAngle": number <br>}
Azimuth Angle | POST | /azimuthAngle | --- | { <br> "sequentialDay": number, <br> "elevationAngle": number, <br> "time": { <br> "hour": number, <br> "min": number  <br> }, <br> "latitude": number <br> } | { <br> "azimuthAngle": number <br>}
Solar Coordinates | POST | /solarCoordinates | --- | { <br> "sequentialDay": number, <br> "time": { <br> "hour": number, <br> "min": number <br> }, <br> "latitude": number <br> } | { <br> "x": number, "y": number,<br> "z": number <br>}
Difference Coordinates | POST | /differenceCoordinates | --- | { <br> "sequentialDay": number, <br> "time": { "hour": number, <br> "min": number <br> }, <br> "latitude": number <br> } | { <br> "x": number, <br> "y": number, <br> "z": number <br> }
