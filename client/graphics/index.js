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

const renderizeGraphic = (date = new Date) => PostCoordinatesWithTime(date).then( (data) => {
	
	const download = document.getElementById('download');
	download.href = `data:text/json;charset=utf-8, ${encodeURIComponent(JSON.stringify(data))}`;
	
	const xGraphic = {
		realData: {
			x: data.map((e) => convertApiTime(e.time)),
			y: data.map((e) => e.realCoordinates.x),
		},
		virtualData: {
			x: data.map((e) => convertApiTime(e.time)),
			y: data.map((e) => e.virtualCoordinates.x),
		},
		calcData: {
			x: data.map((e) => convertApiTime(e.time)), 
			y: data.map((e) => e.differenceCoordinates.x),
		}
	}
	const yGraphic = {
		realData: {
			x: data.map((e) => convertApiTime(e.time)),
			y: data.map((e) => e.realCoordinates.y),
		},
		virtualData: {
			x: data.map((e) => convertApiTime(e.time)),
			y: data.map((e) => e.virtualCoordinates.y),
		},
		calcData: {
			x: data.map((e) => convertApiTime(e.time)), 
			y: data.map((e) => e.differenceCoordinates.y),
		}
	}
	const zGraphic = {
		realData: {
			x: data.map((e) => convertApiTime(e.time)),
			y: data.map((e) => e.realCoordinates.z),
		},
		virtualData: {
			x: data.map((e) => convertApiTime(e.time)),
			y: data.map((e) => e.virtualCoordinates.z),
		},
		calcData: {
			x: data.map((e) => convertApiTime(e.time)),
			y: data.map((e) => e.differenceCoordinates.z),
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
			name: 'Diferença',
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
			name: 'Diferença',
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
			name: 'Diferença',
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

function NavFilterForm(filterOn = false){
	const form = document.querySelector(".header_filter_form").style; 
	if(!filterOn){
		form.opacity = 0;
		return setTimeout(() => form.display = 'none', 105);
	}
	form.opacity = 1;
	return setTimeout(() => form.display = 'flex', 105);
}

function NavFilterFormCustom(filterOn = false){
	const form = document.querySelector(".header_filter_form_custom_input").style; 
	if(!filterOn){
		return form.opacity = 0;
	}
	return form.opacity = 1;
}

	

async function filter(id){
	const dateTag = document.querySelector(`#${id}`).value;

	switch (dateTag) {
		case 'today':
			return await renderizeGraphic(filterDate().today)
		case 'yesterday':
			return await renderizeGraphic(filterDate().yesterday)
		default:
			return await renderizeGraphic(filterDate(dateTag).custom)
	}
}
renderizeGraphic()
