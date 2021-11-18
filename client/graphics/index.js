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

function dataMap(route){
	return {
			x: route.map((element) => element.x),
			y: route.map((element) => element.y),
			z: route.map((element) => element.z),
			date: route.map((element) => element.date)
		}
}

getCoordinates().then( (data) => {
	const xGraphic = {
		realData: {
			x: dataMap(data.coordsReal).date,
			y: dataMap(data.coordsReal).x
		},
		virtualData: {
			x: dataMap(data.coordsVirtual).date,
			y: dataMap(data.coordsVirtual).x
		},
		calcData: {
			x: dataMap(data.coordsDifference).date,
			y: dataMap(data.coordsDifference).x, 
		}
	}

	const yGraphic = {
		realData: {
			x: dataMap(data.coordsReal).date,
			y: dataMap(data.coordsReal).y
		},
		virtualData: {
			x: dataMap(data.coordsVirtual).date,
			y: dataMap(data.coordsVirtual).y
		},
		calcData: {
			x: dataMap(data.coordsDifference).date,
			y: dataMap(data.coordsDifference).y, 
		}
	}

	const zGraphic = {
		realData: {
			x: dataMap(data.coordsReal).date,
			y: dataMap(data.coordsReal).z
		},
		virtualData: {
			x: dataMap(data.coordsVirtual).date,
			y: dataMap(data.coordsVirtual).z
		},
		calcData: {
			x: dataMap(data.coordsDifference).date,
			y: dataMap(data.coordsDifference).z, 
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