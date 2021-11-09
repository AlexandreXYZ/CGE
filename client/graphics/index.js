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

const time = ['15:00', '15:30', '16:00', '16:30']; // 26/10
// gnomon bonitinho
const virtualData = {
	x: {
		x: time,
		y: [-0.687, -0.771, -0.841, -0.897]
	},
	y: {
		x: time,
		y: [0.126, 0.080, 0.028, -0.027]
	},
	z: {
		x: time,
		y: [0.716, 0.632, 0.540, 0.441]
	}
};

// random
const realData = {
	x: {
		x: time,
		y: [-0.864, -0.913, -0.940, -0.927]
	},
	y: {
		x: time,
		y: [-0.020, -0.106, -0.156, -0.167]
	},
	z: {
		x: time,
		y: [0.550, 0.526, 0.449, 0.437]
	}
};

const errorMargin = {
	x: {
		x: time,
		y: [0.177, 0.143, 0.099, 0.030]
	},
	y: {
		x: time,
		y: [0.106, 0.027, 0.127, 0.140]
	},
	z: {
		x: time,
		y: [0.166, 0.107, 0.091, 0.004]
	}
};

graphics('graphicX', 'Coordenadas X', realData.x, virtualData.x)
graphics('graphicXDiference', 'Coordenadas X', realData.x, virtualData.x)

graphics('graphicY', 'Coordenadas Y', realData.y, virtualData.y)
graphics('graphicYDiference', 'Coordenadas Y', realData.x, virtualData.x)

graphics('graphicZ', 'Coordenadas Z', realData.z, virtualData.z)
graphics('graphicZDiference', 'Coordenadas Z', realData.x, virtualData.x)

// graphicsError('graphicError', 'Margem de erro', errorMargin)