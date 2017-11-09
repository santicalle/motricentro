<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card"style="border-top: 4px solid #5face8;">
        <div class="card-header">
          <h3><b>ARETE:</b> 12345</h3>
          <div class="row">
            <div class="col-lg-3 col-md-2">
              <span>Raza: <code>HOLSTEIN</code></span>
            </div>
            <div class="col-lg-2 col-md-2">
              <span>Peso: <code>200kg</code></span>
            </div>
            <div class="col-lg-2 col-md-2">
              <span>Sexo: <code>Hembra</code></span>
            </div>
            <div class="col-lg-2 col-md-2">
              <span>Edad: <code>19 meses</code></span>
            </div>
            <div class="col-lg-3 col-md-2">
              <span>Litros Promedio: <code>2 lts</code></span>
            </div>
          </div>
        </div>
        <div class="card-block">
          <div class="row">
            <div class="col-lg-5 col-xs-12">
              <div class="port_details_all_img row">
                <div class="col-lg-12">
                  <div id="big_banner">
                    <div class="port_big_img">
                      <img class="img img-fluid" src="/static/assets/imgs/ganado.jpg" alt="Ganado">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-7 col-xs-12 product-detail" id="product-detail">             
              <div class="row">                      
                <div class="col-lg-12 col-xs-12" style="text-align: center;">                  
                  <br>
                  <div id="line_top_x" class="chart"></div>
                </div>                
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col-lg-4 col-xs-12">
              <h6 class="f-16 f-w-600 m-t-10 m-b-10">Valor</h6>
              <span class="text-info product-price"><i class="icofont icofont-cur-dollar"></i>260.80</span>
            </div>
            <div class="col-lg-4 col-xs-12">
              <h6 class="f-16 f-w-600 m-t-10 m-b-10"><i class="fa fa-building"></i> Hacienda Turi</h6>
              <div class="f-9 text-muted">Hacienda Actual</div>
            </div>
            <div class="col-lg-4 col-xs-12">
              <h6 class="f-16 f-w-600 m-t-10 m-b-10"><i class="fa fa-user"></i> Juan Solis</h6>
              <div class="f-9 text-muted">Administrador Actual</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ganado',
    data() {
      return {
        //titulo: 'Detalle de Herramienta'
      }
    },
    methods: {
      drawChart: function(){
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Mes');
        data.addColumn('number', '2016');
        data.addColumn('number', '2017');

        data.addRows([
          ['Enero',  37.8, 80.8],
          ['Febrero',  30.9, 69.5],
          ['Marzo',  25.4,   57],
          ['Abril',  11.7, 18.8],
          ['Mayo',  11.9, 17.6],
          ['Junio',   8.8, 13.6],
          ['Julio',   7.6, 12.3],
          ['Agosto',  12.3, 29.2],
          ['Septiembre',  16.9, 42.9],
          ['Octubre', 12.8, 30.9],
          ['Noviembre',  24,  7.9],
          ['Diciembre',  20,  0]
        ]);

        var options = {                
          hAxis: {
          title: 'Mes'
	        },
	        vAxis: {
	          title: 'Litros'
	        },
	        'legend' : 'bottom',
	        'title' : 'PRODUCCIÓN ANUAL',
        };

        var chart = new google.visualization.LineChart(document.getElementById('line_top_x'));

        chart.draw(data, options);
      }
    },
    mounted () {
      google.charts.load('current', {packages: ['corechart', 'line']});
			google.charts.setOnLoadCallback(this.drawChart);
    },
  }
</script>
<style type="text/css">
	.chart {
	  width: 100%; 
	  min-height: 300px;
	}
</style>