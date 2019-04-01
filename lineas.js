

function GenerargraficaLine(ejes){


  console.log("El pana ",ejes);

var morris1 = new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'MorrisGrafica',
  parseTime: false,
  lineColors: ['black'],
  lineWidth: 0,
  pointFillColors: ['blue'],
  pointStrokeColors : ['blue'],
  pointSize: 2,
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data:  ejes,
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['log(t)'],
  resize: true,
  
});


}



function GenerargraficaArea(ejes){


  console.log("El pana ",ejes);

var morris1 = new Morris.Area({
  // ID of the element in which to draw the chart.
  element: 'MorrisGrafica',
  parseTime: false,
  lineColors: ['lightblue'],
  lineWidth: 0,
  pointFillColors: ['blue'],
  pointStrokeColors : ['blue'],
  pointSize: 2,
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data:  ejes,
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['log(t)'],
  resize: true,
  
});


}