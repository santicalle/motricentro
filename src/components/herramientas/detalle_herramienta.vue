<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h3>PALA PUNTA</h3>
          <div class="row">
            <div class="col-lg-4">
              <span>Marca: <code>BELLOTA</code></span>
            </div>
            <div class="col-lg-4">
              <span>Código: <code>PRDT1234</code></span>
            </div>
            <div class="col-lg-4">
              <span>Estado: <code>Nuevo</code></span>
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
                      <img class="img img-fluid" src="/static/assets/imgs/pala.jpg" alt="Pala_Bellota">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-7 col-xs-12 product-detail" id="product-detail">
              <div class="row">
                <div class="col-lg-4 col-xs-12">
                  <h6 class="f-16 f-w-600 m-t-10 m-b-10">Precio de Compra</h6>
                  <span class="text-primary product-price"><i class="icofont icofont-cur-dollar"></i>25.30</span>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-lg-6 col-xs-12">
                  <h6 class="f-16 f-w-600 m-t-10 m-b-10"><i class="fa fa-building"></i> Hacienda Turi</h6>
                  <div class="f-9 text-muted">Hacienda Actual</div>
                </div>
                <div class="col-lg-6 col-xs-12">
                  <h6 class="f-16 f-w-600 m-t-10 m-b-10"><i class="fa fa-user"></i> Juan Solis</h6>
                  <div class="f-9 text-muted">Administrador Actual</div>
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
    name: 'detalle_herramienta',
    data() {
      return {
        //titulo: 'Detalle de Herramienta'
      }
    }
  }
</script>
