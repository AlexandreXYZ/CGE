function graphics(id, name, virtualData, realData) {
	virtualData.type = realData.type = 'lines';
	virtualData.name = 'Gnômon Virtual';
	realData.name = 'Gnômon Real';

	const data = [virtualData, realData];

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
		case 'x_R':
			y = route.map(function(e, indice){
				return route[indice].x_R
			})
			return y;
		case 'y_R':
			y = route.map(function(e, indice){
				return route[indice].y_R
			})
			return y;
		case 'z_R':
			y = route.map(function(e, indice){
				return route[indice].z_R
			})
			return y;
		case 'x_V':
			y = route.map(function(e, indice){
				return route[indice].x_V
			})
			return y;
		case 'y_V':
			y = route.map(function(e, indice){
				return route[indice].y_V
			})
			return y;
		case 'z_V':
			y = route.map(function(e, indice){
				return route[indice].z_V
			})
			return y;
		case 'date':
			x = route.map(function(e, indice){
				return route[indice].date
			})
			return x;
	}
}

getCoordinates().then( (data) => {
	const xGraphic = {
		realData: {
			x: dataMap({route: data.coordsReal, dateType: 'date'}),
			y: dataMap({route: data.coordsReal, dateType: 'x_R'})
		},
		virtualData: {
			x: dataMap({route: data.coordsVirtual, dateType: 'date'}),
			y: dataMap({route: data.coordsVirtual, dateType: 'x_V'})
		}
	}
	const yGraphic = {
		realData: {
			x: dataMap({route: data.coordsReal, dateType: 'date'}),
			y: dataMap({route: data.coordsReal, dateType: 'y_R'})
		},
		virtualData: {
			x: dataMap({route: data.coordsVirtual, dateType: 'date'}),
			y: dataMap({route: data.coordsVirtual, dateType: 'y_V'})
		}
	}
	const zGraphic = {
		realData: {
			x: dataMap({route: data.coordsReal, dateType: 'date'}),
			y: dataMap({route: data.coordsReal, dateType: 'z_R'})
		},
		virtualData: {
			x: dataMap({route: data.coordsVirtual, dateType: 'date'}),
			y: dataMap({route: data.coordsVirtual, dateType: 'z_V'})
		}
	}
	graphics('graphicX', 'Coordenadas X', xGraphic.realData, xGraphic.virtualData)
	graphics('graphicY', 'Coordenadas Y', yGraphic.realData, yGraphic.virtualData)
	graphics('graphicZ', 'Coordenadas Z', zGraphic.realData, zGraphic.virtualData)
})