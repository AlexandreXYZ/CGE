function graphics(id, x1, y1, x2, y2){

  var trace1 = {
    x: x1,
    y: y1,
    type: 'scatter'
  };

  var trace2 = {
    x: x2,
    y: y2,
    type: 'scatter'
  };

  var data = [trace1, trace2];

  var layout = {
    xaxis: {
      type: 'log',
      autorange: true
    },
    yaxis: {
      type: 'log',
      autorange: true
    }
  };
  Plotly.newPlot(id, data, layout);
}
