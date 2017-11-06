<template>
<div class="card">
  <div class="row invoice-contact">
    <div class="col-md-8">
      <div class="invoice-box row">
        <div class="col-sm-12">
          <table class="table table-responsive invoice-table table-borderless">
            <tbody>
              <tr>
                <td><img src="assets/images/logo-blue.png" class="m-b-10" alt=""></td>
              </tr>
              <tr>
                <td>Proveedor X</td>
              </tr>
              <tr>
                <td>Borrero y Sucre</td>
              </tr>
              <tr>
                <td><a href="mailto:proveedorx@gmail.com" target="_top">proveedorx@gmail.com</a>
                </td>
              </tr>
              <tr>
                <td>+593 72 898 452</td>
              </tr>
              <!-- <tr>
                                                            <td><a href="#" target="_blank">www.demo.com</a>
                                                            </td>
                                                        </tr> -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="row text-center">
        <div class="col-sm-12 invoice-btn-group">
          <button type="button" class="btn btn-primary btn-print-invoice waves-effect waves-light m-r-20">Imprimir Factura
                                            </button>
          <button type="button" class="btn btn-danger waves-effect waves-light">Cancelar
                                            </button>
        </div>
      </div>
    </div>
  </div>
  <div class="card-block">
    <div class="row invoive-info">
      <div class="col-md-4 col-xs-12 invoice-client-info">
        <h6>Información de la Factura :</h6>
        <table class="table table-responsive invoice-table invoice-order table-borderless">
          <tbody>
            <tr>
              <th>Fecha :</th>
              <td>3 de Noviembre de 2017</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-4 col-sm-6">


      </div>
      <div class="col-md-4 col-sm-6">
        <h6 class="m-b-20">Número de Factura   <span>#12398521473</span></h6>
        <h6 class="text-uppercase text-primary">Total :
                                    <span>$112.00</span>
                                </h6>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="table-responsive">
          <table class="table  invoice-detail-table">
            <thead>
              <tr class="thead-default">
                <th>Description</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h6>Taladro</h6>
                </td>
                <td>3</td>
                <td>$20.00</td>
                <td>$60.00</td>
              </tr>
              <tr>
                <td>
                  <h6>Pala Punta</h6>
                </td>
                <td>1</td>
                <td>$20.00</td>
                <td>$20.00</td>
              </tr>
              <tr>
                <td>
                  <h6>Martillo</h6>
                </td>
                <td>2</td>
                <td>$10.00</td>
                <td>$20.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <table class="table table-responsive invoice-table invoice-total">
          <tbody>
            <tr>
              <th>Sub Total :</th>
              <td>$100.00</td>
            </tr>
            <tr>
              <th>IVA (12%) :</th>
              <td>$12.00</td>
            </tr>
            <tr>
              <th>Discount (0%) :</th>
              <td>$0.00</td>
            </tr>
            <tr class="text-info">
              <td>
                <hr>
                <h5 class="text-primary">Total  :</h5>
              </td>
              <td>
                <hr>
                <h5 class="text-primary">$112.00</h5>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>    
  </div>
</div>
</template>
<script>
export default {
  name: 'factura_compra',
  data() {
    return {}
  }
}
</script>
