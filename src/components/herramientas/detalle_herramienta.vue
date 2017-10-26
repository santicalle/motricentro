<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card product-detail-page">
        <div class="card-block">
          <div class="row">
            <div class="col-lg-5 col-xs-12">
              <div class="port_details_all_img row">
                <div class="col-lg-12">
                  <div id="big_banner">
                    <div class="port_big_img">
                      <img class="img img-fluid" src="/static/template/Theme/assets/images/product-detail/pro-d-l-1.jpg" alt="Big_ Details">
                    </div>                    
                  </div>
                </div>                
              </div>
            </div>
            <div class="col-lg-7 col-xs-12 product-detail" id="product-detail">
              <div class="row">
                <div>
                  <div class="col-lg-12">
                    <span class="txt-muted d-inline-block">Product Code:
                      <a href="#!"> PRDT1234 </a>
                    </span>
                    <span class="f-right">Availablity :
                      <a href="#!"> In Stock </a>
                    </span>
                  </div>
                  <div class="col-lg-12">
                    <h4 class="pro-desc">Athena Black & Red Polyester Georgette Maxi Dress</h4>
                  </div>
                  <div class="col-lg-12">
                    <span class="txt-muted"> Brand : Denim </span>
                  </div>
                  <div class="stars stars-example-css m-t-15 detail-stars col-lg-12">
                    <select id="product-view" class="rating-star" name="rating" autocomplete="off">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div class="col-lg-12">
                    <span class="text-primary product-price">
                      <i class="icofont icofont-cur-dollar"></i>80.00</span>
                    <span class="done-task txt-muted">$90.59</span>
                    <hr>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                      it to make a type specimen book. It has survived not only five centuries.
                    </p>
                    <hr>
                    <h6 class="f-16 f-w-600 m-t-10 m-b-10">Quantity</h6>
                  </div>
                  <div class="col-xl-3 col-sm-12">
                    <div class="p-l-0 m-b-25">
                      <div class="input-group">
                        <span class="input-group-btn">
                          <button type="button" class="btn btn-default btn-number shadow-none" disabled="disabled" data-type="minus" data-field="quant[1]">
                            <span class="icofont icofont-minus m-0"></span>
                          </button>
                        </span>
                        <input type="text" name="quant[1]" class="form-control input-number text-center" value="1">
                        <span class="input-group-btn">
                          <button type="button" class="btn btn-default btn-number shadow-none" data-type="plus" data-field="quant[1]">
                            <span class="icofont icofont-plus m-0"></span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 mob-product-btn">
                    <button type="button" class="btn btn-primary waves-effect waves-light m-r-20">
                      <i class="icofont icofont-cart-alt f-16"></i>
                      <span class="m-l-10">ADD TO CART</span>
                    </button>
                    <button type="button" class="btn btn-outline-primary waves-effect waves-light m-r-20">
                      <i class="icofont icofont-heart-alt f-16 m-0"></i>
                    </button>
                    <button type="button" class="btn btn-outline-primary waves-effect waves-light">
                      <i class="icofont icofont-eye-alt f-16 m-0"></i>
                    </button>
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
    name: 'detalle_herramienta',
    data() {
      return {
      }
    }
  }
</script>