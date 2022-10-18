//BLOQUE CONFIGURACION FETCH
function actualizar(){
async function fetchData(){
    const url = 'http://127.0.0.1:5500/JSON/datosBuk.json';
    const response = await fetch(url);
    //se espera hasta que se complete la soicitud
    const datapoints = await response.json();
    //verificar si tenemos la respuesta adecuada
    console.log(datapoints)
    return datapoints;
}

    //vamos a buscar un dato en especifico
    fetchData().then(datapoints => {
        //se hace la ruta del dato (ojo que la base es un array)}
        //desde este punto tambien se puede clonar para otra busqueda
        const dia = datapoints.reporteChat[0].metricas.map(
            function(index){
                return index.fecha;
            }
        )
        console.log(dia)
        /*console.log(month)  Para la primera prueba, ver si llama a month*/

        //Aquí segunda busqueda, en este caso basta con duplicar lo de arriba
        const time = datapoints.reporteChat[0].metricas.map(
            function(index){
                return index.tiempo;
            }
        )
        console.log(time)

        //AHORA UNOS LLAMADOS PARA ACTUALIZAR EL GRAFICO
        //EN EL EJEMPLO SE USA CONFIG, DATA,Labels (ruta para ingresar datos)
        //se agrega el dato a cambiar
    //    myChart.config.data.labels = dia;
     //   myChart.config.data.datasets[0].data = time;
    //    myChart.update();
    })
}


// setup 
const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Weekly Sales',
      data: [18, 12, 6, 9, 12, 3, 9],
      backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 0, 0, 0.2)'
      ],
      borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 0, 0, 1)'
      ],
      borderWidth: 1
    }]
  };

  // config 
  const config = {
    type: 'bar',
    data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );