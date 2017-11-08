<template>
  <div class="">
    <div class="row">
      <div class="col-md-12">
          <h4 class="">SISTEMA DE GESTION DE INVENTARIO</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h5>Notificaciones</h5>
          </div>
          <div class="card-block panels-wells">
            <!--<div class="alert alert-info background-info">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <i class="icofont icofont-close-line-circled text-white"></i>
                </button>
                <strong>Info!</strong>
                Se ha asignado la herramienta<code>Taladro</code> a <code>Hacienda Cañar</code>
            </div>

            <div class="alert alert-danger background-danger">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <i class="icofont icofont-close-line-circled text-white"></i>
                </button>
                <strong>Advertencia!</strong> La herramienta<code>Tijeras de Podar</code> de <code>Hacienda Turi</code> se han reportado como dañadas.
            </div>-->

            <div class="row">
              <div class="col-md-4 col-lg-4 col-sm-12 col-xl-2">
                <div class="panel panel-info">
                  <div class="panel-heading bg-info">
                      Información
                  </div>
                  <div class="panel-body">
                      <p>Se asignó <code>Pico Punta</code> a la hacienda <code>Hacienda Turi.</code></p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-12 col-xl-2">
                <div class="panel panel-danger">
                    <div class="panel-heading bg-danger">
                        Advertencia
                    </div>
                    <div class="panel-body">
                        <p>La herramienta <code>Taladro</code> de la hacienda <code>Hacienda Cañar</code> se reportó como dañada.</p>
                    </div>
                </div>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-12 col-xl-2">
                <div class="panel panel-warning">
                    <div class="panel-heading bg-warning">
                        Alerta
                    </div>
                    <div class="panel-body">
                        <p>La herramienta <code>Martillo</code> se encuentra con existencias mínimas.</p>
                    </div>
                </div>
              </div>

            </div>            

          </div>
        </div>
      </div>
    </div>

    <div class="row">
        <div class="col-md-12 col-lg-6">
            <div class="card">
                <div class="card-header">
                    <h5>GASTOS DE COMPRAS</h5>
                    <span>Estadística de los gastos de compras del presente año ( 2017 )</span>
                </div>
                <div class="card-block">
                    <div id="chart_Combo" style="width: 100%; height: 300px;"></div>
                </div>
            </div>
        </div>
        <div class="col-md-12 col-lg-6">
            <div class="card">
                <div class="card-header">
                    <h5>INGRESO DE HERRAMIENTAS</h5>
                    <span>Estadística de los ingresos de éste mes ( Noviembre 2017 )</span>
                </div>
                <div class="card-block">
                    <div id="chart_Threshold" style="width: 100%; height: 300px;"></div>
                </div>
            </div>
        </div>
    </div>

  </div>

</template>

<script>  
  export default {
    name: 'main',
    data () {
      return {
        msg: 'Esta es la demo'
      }
    },
    methods: {
      drawVisualization: function(){
         // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
            ['Month', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
            ['2017', 165, 300, 522, 998, 450, 614.6, 566, 780, 159.25, 1547, 25]
        ]);

        var options = {
            title: 'Gastos de Compras',
            vAxis: { title: 'Valor' },
            hAxis: { title: 'Meses' },
            seriesType: 'bars',
            series: { 2: { type: 'line' } },
            colors: ['#2ecc71', '#01C0C8', '#FB9678', '#5faee3', '#f4d03f', '#e74c3c']
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart_Combo'));
        chart.draw(data, options);
      },
      drawChartThreshold: function(){
        var dataThreshold = new google.visualization.DataTable();
        dataThreshold.addColumn('string', 'Pizza');
        dataThreshold.addColumn('number', 'Populartiy');
        dataThreshold.addRows([
            ['Pala', 33],
            ['Martillo', 26],
            ['Pico', 22],
            ['Taladro', 10],
            ['Tijeras', 9]
        ]);  

        var optionsThreshold = {
            title: 'Ingresos de Herramientas',
            //sliceVisibilityThreshold: .1,
            colors: ['#2ecc71', '#01C0C8', '#FB9678', '#5faee3', '#F4D03F']
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart_Threshold'));
        chart.draw(dataThreshold, optionsThreshold);
      }
    },
    mounted () {
      google.charts.load('current', { 'packages': ['corechart'] });
      google.charts.setOnLoadCallback(this.drawVisualization);
      
      google.charts.load('current', { 'packages': ['corechart'] });
      google.charts.setOnLoadCallback(this.drawChartThreshold);
    },
  }

</script>
