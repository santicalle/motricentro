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
  </div>

</template>

<script>
  export default {
    name: 'main',
    data () {
      return {
        msg: 'Esta es la demo'
      }
    }
  }
</script>
