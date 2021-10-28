function graphics(id, name, dadosVirtuais, dadosReais) {
	dadosVirtuais.type = 'lines';
	dadosVirtuais.name = 'Gnômon Virtual';
	dadosReais.type = 'lines';
	dadosReais.name = 'Gnômon Real';

	var data = [dadosVirtuais, dadosReais];

	var layout = {
		title: name,
		xaxis: {
			title: 'Horário'
		}
	};
	Plotly.newPlot(id, data, layout);
}

const horario = ['15:00', '15:30', '16:00', '16:30'];
const dadosReais = {
	x: {
		x: horario,
		y: [0.687, 0.771, 0.841, 0.897]
	},
	y: {
		x: horario,
		y: [0.126, 0.080, 0.028, -0.027]
	},
	z: {
		x: horario,
		y: [0.716, 0.632, 0.540, 0.441]
	}
};

const dadosVirtuais = {
	x: {
		x: horario,
		y: [0.149, 0.161, 0.178, 0.126]
	},
	y: {
		x: horario,
		y: [0.035, 0.090, 0.018, 0.022]
	},
	z: {
		x: horario,
		y: [0.034, 0.048, 0.024, 0.041]
	}
};

graphics('graphicX', 'Coordenadas X', dadosReais.x, dadosVirtuais.x)
graphics('graphicY', 'Coordenadas Y', dadosReais.y, dadosVirtuais.y)
graphics('graphicZ', 'Coordenadas Z', dadosReais.z, dadosVirtuais.z)