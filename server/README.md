## API Requests

```
!"coordinate" = {
	x: number,
	y: number,
	z: number
}
!"date" = {
	day: number,
	month: number,
	year: number
}
!"time" = {
	hour: number,
	min: number,
	seg: number
}
```

Parameters with "**!**" are described above (*"coordinate"*, *"date"* and *"time"*). <br>
Parameters with "**?**" are optional (*"date"* and *"time"*).

Request | Method | Route URI | Query parameters | Body | Response
--- | --- | --- | --- | --- | ---
Solar Ecliptic | POST | /ecliptic | --- | { <br> !"date?", <br> !"time?", <br> "latitude": number <br> } | { <br> "elevationAngle": number, "azimuthAngle": number <br> }
Virtual Coordinates | POST | /virtualCoordinates | --- | { <br> !"date?", <br> !"time?", <br> "latitude": number <br> } |  { <br> !"coordinate" <br> }
All Coordinates | POST | /coordinates | --- | { <br> !"date?", <br> !"time?", <br> "latitude": number <br> } |  { <br> "virtualCoordinates": !coordinate, <br> "realCoordinates": !coordinate, <br> "differenceCoordinates": !coordinate <br> }
Coordinates of a Time Space | POST | /coordinates/time | --- | { <br> "latitude?": number, <br> "longitude?": number, <br> "dateISO": Date <br> } |  [ <br> &nbsp;&nbsp; { <br> &nbsp;&nbsp; "virtualCoordinates": !coordinate, <br> &nbsp;&nbsp; "realCoordinates": !coordinate, <br> &nbsp;&nbsp; "differenceCoordinates": !coordinate, <br> &nbsp;&nbsp; "time": !time <br> &nbsp;&nbsp; }, <br> &nbsp;&nbsp; ... <br> ]
Coordinates of Now | POST | /coordinates/now | --- | { <br> "latitude?": number, <br> "longitude?": number, <br> "dateISO": Date <br> } |  { <br> "virtualCoordinates": !coordinate, <br> "realCoordinates": !coordinate, <br> "differenceCoordinates": !coordinate <br> "time": !time <br> }
Get Saved Coordinates | GET | /coordinates | num: number | --- | { <br> "coordsReal": [ <br> &nbsp;&nbsp; { <br> &nbsp;&nbsp; "id": number, <br> &nbsp;&nbsp; !"coordinate" <br> &nbsp;&nbsp; "date": Date <br> &nbsp;&nbsp; } <br> ], <br> "coordsVirtual": [ <br> &nbsp;&nbsp; { <br> &nbsp;&nbsp; "id": number, <br> &nbsp;&nbsp; !"coordinate", <br> &nbsp;&nbsp; "date": date <br> &nbsp;&nbsp; } <br> ], <br> "coordsDifference": [ <br> &nbsp;&nbsp; { <br> &nbsp;&nbsp; "id": number, <br> &nbsp;&nbsp; !"coordinate", <br> &nbsp;&nbsp; "date_Calc": date <br> &nbsp;&nbsp; } <br> ] <br> }
