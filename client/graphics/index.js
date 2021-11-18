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

function dataMap({route, dateType}){
	switch (dateType){
		case 'x':
			return route.map((rout) => rout.x);
		case 'y':
			return route.map((rout) => rout.y);
		case 'z':
			return route.map((rout) => rout.z);
		case 'date':
			return route.map((rout) => rout.date);
	}
}

getCoordinates().then( (data) => {
	const xGraphic = {
		realData: {
			x: dataMap({route: data.coordsReal, dateType: 'date'}),
			y: dataMap({route: data.coordsReal, dateType: 'x'})
		},
		virtualData: {
			x: dataMap({route: data.coordsVirtual, dateType: 'date'}),
			y: dataMap({route: data.coordsVirtual, dateType: 'x'})
		},
		calcData: {
			x: dataMap({route: data.coordsDifference, dateType: 'date'}),
			y: dataMap({route: data.coordsDifference, dateType: 'x'}), 
		}
	}

	const yGraphic = {
		realData: {
			x: dataMap({route: data.coordsReal, dateType: 'date'}),
			y: dataMap({route: data.coordsReal, dateType: 'y'})
		},
		virtualData: {
			x: dataMap({route: data.coordsVirtual, dateType: 'date'}),
			y: dataMap({route: data.coordsVirtual, dateType: 'y'})
		},
		calcData: {
			x: dataMap({route: data.coordsDifference, dateType: 'date_Calc'}),
			y: dataMap({route: data.coordsDifference, dateType: 'y'}), 
		}
	}

	const zGraphic = {
		realData: {
			x: dataMap({route: data.coordsReal, dateType: 'date'}),
			y: dataMap({route: data.coordsReal, dateType: 'z'})
		},
		virtualData: {
			x: dataMap({route: data.coordsVirtual, dateType: 'date'}),
			y: dataMap({route: data.coordsVirtual, dateType: 'z'})
		},
		calcData: {
			x: dataMap({route: data.coordsDifference, dateType: 'date'}),
			y: dataMap({route: data.coordsDifference, dateType: 'z'}), 
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