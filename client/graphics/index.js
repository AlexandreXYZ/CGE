function graphics({id, name, virtualData = [], realData = [], calcData = []}) {
	virtualData.type = realData.type = calcData.type = 'lines';
	virtualData.name = 'Gnômon Virtual';
	realData.name = 'Gnômon Real';
	calcData.name = 'Média dos Gnomons';
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

		case 'x_Calc':
		y = route.map(function(e, indice){
			return route[indice].x_Calc
		})
		return y;
		case 'y_Calc':
			y = route.map(function(e, indice){
				return route[indice].y_Calc
			})
			return y;
		case 'z_Calc':
			y = route.map(function(e, indice){
				return route[indice].z_Calc
			})
			return y;
		
		case 'date':
			x = route.map(function(e, indice){
				return route[indice].date
			})
			return x;
		case 'date_Calc':
			x = route.map(function(e, indice){
				return route[indice].date_Calc
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
		},
		calcData: {
			x: dataMap({route: data.coordsDifference, dateType: 'date_Calc'}),
			y: dataMap({route: data.coordsDifference, dateType: 'x_Calc'}), 
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
		},
		calcData: {
			x: dataMap({route: data.coordsDifference, dateType: 'date_Calc'}),
			y: dataMap({route: data.coordsDifference, dateType: 'y_Calc'}), 
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
		},
		calcData: {
			x: dataMap({route: data.coordsDifference, dateType: 'date_Calc'}),
			y: dataMap({route: data.coordsDifference, dateType: 'z_Calc'}), 
		}
	}

	graphics({id: 'graphicX', name: 'Coordenadas X', realData: xGraphic.realData, virtualData: xGraphic.virtualData})
	graphics({id: 'graphicXDiference', name: 'Coordenadas D', calcData: xGraphic.calcData})
	
	graphics({id: 'graphicY', name: 'Coordenadas Y', realData: yGraphic.realData, virtualData: yGraphic.virtualData})
	graphics({id: 'graphicYDiference', name: 'Coordenadas D', calcData: yGraphic.calcData})
	
	graphics({id: 'graphicZ', name: 'Coordenadas Z', realData: zGraphic.realData, virtualData: zGraphic.virtualData})
	graphics({id: 'graphicZDiference', name: 'Coordenadas D', calcData: zGraphic.calcData})
})