function graphics({id, name, virtualData = [], realData = [], calcData = []}) {	
	virtualData.type = realData.type = calcData.type = 'lines';	
	
	realData.name = 'Real';
	virtualData.name = 'Virtual';
	calcData.name = 'Média dos dois';
  
	const data = [virtualData, realData, calcData];

	const layout = {
		title: name,
		xaxis: {
			title: 'Horário'
		}
	};
	Plotly.newPlot(id, data, layout);
}

function graphicsError(id, name, errorMargin) {
	errorMargin.x.type = errorMargin.y.type = errorMargin.z.type = 'lines';
	errorMargin.x.name = 'X';
	errorMargin.y.name = 'Y';
	errorMargin.z.name = 'Z';

	const data = [errorMargin.x, errorMargin.y, errorMargin.z];

	const layout = {
		title: name,
		xaxis: {
			title: 'Horário'
		}
	};
	Plotly.newPlot(id, data, layout);
}

PostCoordinatesWithTime().then( (data) => {
	const xGraphic = {
		realData: {
			x: data.map((e) => e.realCoordinates.x),
			y: data.map((e) => e.time),
		},
		virtualData: {
			x: data.map((e) => e.virtualCoordinates.x),
			y: data.map((e) => e.time)
		},
		calcData: {
			x: data.map((e) => e.differenceCoordinates.x),
			y: data.map((e) => e.time), 
		}
	}
	const yGraphic = {
		realData: {
			x: data.map((e) => e.realCoordinates.y),
			y: data.map((e) => e.time),
		},
		virtualData: {
			x: data.map((e) => e.virtualCoordinates.y),
			y: data.map((e) => e.time)
		},
		calcData: {
			x: data.map((e) => e.differenceCoordinates.y),
			y: data.map((e) => e.time), 
		}
	}
	const zGraphic = {
		realData: {
			x: data.map((e) => e.realCoordinates.z),
			y: data.map((e) => e.time),
		},
		virtualData: {
			x: data.map((e) => e.virtualCoordinates.z),
			y: data.map((e) => e.time)
		},
		calcData: {
			x: data.map((e) => e.differenceCoordinates.z),
			y: data.map((e) => e.time), 
		}
	}

	graphics(
		{
			id: 'graphicX',
			name: 'Coordenadas X',
			realData: xGraphic.realData,
			virtualData: xGraphic.virtualData
		})
	graphics(
		{
			id: 'graphicXDifference',
			name: 'Coordenadas D',
			calcData: xGraphic.calcData
		})

	graphics(
		{
			id: 'graphicY',
			name: 'Coordenadas Y',
			realData: yGraphic.realData,
			virtualData: yGraphic.virtualData
		})
	graphics(
		{
			id: 'graphicYDifference',
			name: 'Coordenadas D',
			calcData: yGraphic.calcData
		})
	
	graphics(
		{
			id: 'graphicZ',
			name: 'Coordenadas Z',
			realData: zGraphic.realData,
			virtualData: zGraphic.virtualData
		})
	graphics(
		{
			id: 'graphicZDifference',
			name: 'Coordenadas D',
			calcData: zGraphic.calcData
		})
})

// getCoordinates}().then( (data) => {
// 	console.log(data)
// 	const xGraphic = {
// 		realData: {
// 			x: dataMap({data: data, route: realCoordinates}).date,
// 			y: dataMap({data: data, route: realCoordinates}).x
// 		},
// 		virtualData: {
// 			x: dataMap({data: data, route: virtualCoordinates}).date,
// 			y: dataMap({data: data, route: virtualCoordinates}).x
// 		},
// 		calcData: {
// 			x: dataMap({data: data, route: differenceCoordinates}).date,
// 			y: dataMap({data: data, route: differenceCoordinates}).x, 
// 		}
// 	}

// 	const yGraphic = {
// 		realData: {
// 			x: dataMap({data: data, route: realCoordinates}).date,
// 			y: dataMap({data: data, route: realCoordinates}).y
// 		},
// 		virtualData: {
// 			x: dataMap({data: data, route: virtualCoordinates}).date,
// 			y: dataMap({data: data, route: virtualCoordinates}).y
// 		},
// 		calcData: {
// 			x: dataMap({data: data, route: differenceCoordinates}).date,
// 			y: dataMap({data: data, route: differenceCoordinates}).y, 
// 		}
// 	}

// 	const zGraphic = {
// 		realData: {
// 			x: dataMap({data: data, route: realCoordinates}).date,
// 			y: dataMap({data: data, route: realCoordinates}).z
// 		},
// 		virtualData: {
// 			x: dataMap({data: data, route: virtualCoordinates}).date,
// 			y: dataMap({data: data, route: virtualCoordinates}).z
// 		},
// 		calcData: {
// 			x: dataMap({data: data, route: differenceCoordinates}).date,
// 			y: dataMap({data: data, route: differenceCoordinates}).z, 
// 		}
// 	}

// 	graphics(
// 		{
// 			id: 'graphicX',
// 			name: 'Coordenadas X',
// 			realData: xGraphic.realData,
// 			virtualData: xGraphic.virtualData
// 		})
// 	graphics(
// 		{
// 			id: 'graphicXDifference',
// 			name: 'Coordenadas D',
// 			calcData: xGraphic.calcData
// 		})

// 	graphics(
// 		{
// 			id: 'graphicY',
// 			name: 'Coordenadas Y',
// 			realData: yGraphic.realData,
// 			virtualData: yGraphic.virtualData
// 		})
// 	graphics(
// 		{
// 			id: 'graphicYDifference',
// 			name: 'Coordenadas D',
// 			calcData: yGraphic.calcData
// 		})
	
// 	graphics(
// 		{
// 			id: 'graphicZ',
// 			name: 'Coordenadas Z',
// 			realData: zGraphic.realData,
// 			virtualData: zGraphic.virtualData
// 		})
// 	graphics(
// 		{
// 			id: 'graphicZDifference',
// 			name: 'Coordenadas D',
// 			calcData: zGraphic.calcData
// 		})
// })


const graphicOne = document.getElementsByClassName('container_graphics_one');
const graphicTwo = document.getElementsByClassName('container_graphics_two');
const graphicButtonRight = document.getElementsByClassName('buttonNextRight');
const graphicButtonLeft = document.getElementsByClassName('buttonNextLeft');

for(i = 0; i != 3; i++){
	graphicOne[i].style.display = 'block';
	graphicTwo[i].style.display = 'none';

	graphicButtonRight[i].style.display = 'block';
	graphicButtonLeft[i].style.display = 'none';
}

function next(index){
	if (graphicOne[index].style.display === 'block') {
		graphicOne[index].style.display = 'none';
		graphicButtonRight[index].style.display = 'none';

		graphicTwo[index].style.display = 'block';
		graphicButtonLeft[index].style.display = 'block';
		return;
	}
	if (graphicTwo[index].style.display === 'block') {
		graphicTwo[index].style.display = 'none';
		graphicButtonLeft[index].style.display = 'none'

		graphicOne[index].style.display = 'block';
		graphicButtonRight[index].style.display = 'block';
		return;
	}
}