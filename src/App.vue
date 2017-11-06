<template>
  <div id="app">

    <div id="pcoded" class="pcoded">

        <div class="pcoded-overlay-box"></div>

        <div class="pcoded-container navbar-wrapper">

            <!-- Header Top Menu-->
            <nav class="navbar header-navbar pcoded-header" header-theme="theme4">
              <div class="navbar-wrapper">
                <div class="navbar-logo">
                  <a class="mobile-menu" id="mobile-collapse" href="#!">
                    <i class="ti-menu"></i>
                  </a>

                  <a href="index.html">
                    <h5>Logo</h5>
                  </a>
                  <a class="mobile-options">
                    <i class="ti-more"></i>
                  </a>
                </div>
                <div class="navbar-container container-fluid">
                  <div>
                    <ul class="nav-left">
                      <li>
                        <div class="sidebar_toggle">
                          <a href="javascript:void(0)">
                            <i class="ti-menu"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                    <ul class="nav-right">
                      <li class="header-notification">
                        <a href="#!">
                          <i class="ti-bell"></i>
                          <span class="badge">1</span>
                        </a>
                        <ul class="show-notification">
                          <li>
                            <h6>Notificaciones</h6>
                            <label class="label label-danger">Nuevas</label>
                          </li>
                          <li>
                            <div class="media">
                              <img class="d-flex align-self-center" src="/static/template/assets/images/user.png" alt="Generic placeholder image">
                              <div class="media-body">
                                <h5 class="notification-user">Juan Pérez</h5>
                                <p class="notification-msg">Indica que la herramienta <code>Taladro</code> se ha dañado.</p>
                                <span class="notification-time">Hace 30 minutos</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>

                      <li class="user-profile header-notification">
                        <a href="#!">
                          <img src="/static/template/assets/images/user.png" alt="User-Profile-Image">
                          <span>Washington Cobeña</span>
                          <i class="ti-angle-down"></i>
                        </a>
                        <ul class="show-notification profile-notification">
                          <li>
                            <a href="#!">
                              <i class="ti-settings"></i> Configuraciones
                            </a>
                          </li>
                          <li>
                            <a href="user-profile.html">
                              <i class="ti-user"></i> Perfil
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i class="ti-layout-sidebar-left"></i> Cerrar Sesión
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>

            <div class="pcoded-main-container">

                <div class="pcoded-wrapper">

                    <!-- left-side-menu -->
                    <nav class="pcoded-navbar">
                      <ul class="pcoded-item pcoded-left-item">
                        <li class="active">
                          <router-link :to="{ name: 'home', params: {} }">
                            <span class="pcoded-micon"><i class="fa fa-home"></i></span>
                            <span class="pcoded-mtext">Inicio</span>
                            <span class="pcoded-mcaret"></span>
                          </router-link>
                        </li>
                        <li>
                          <router-link :to="{ name: 'detalle_herramienta', params: {} }">
                            <span class="pcoded-micon"><i class="fa fa-scissors"></i></span>
                            <span class="pcoded-mtext">Detalles Herramienta</span>
                            <span class="pcoded-mcaret"></span>
                          </router-link>
                        </li>
                        <li>
                          <router-link :to="{ name: 'factura_compra', params: {} }">
                            <span class="pcoded-micon"><i class="fa fa-file-text-o"></i></span>
                            <span class="pcoded-mtext">Factura de Compra</span>
                            <span class="pcoded-mcaret"></span>
                          </router-link>
                        </li>
                      </ul>
                    </nav>

                    <div class="pcoded-content">
                        <div class="pcoded-inner-content">

                            <!-- Main-body start -->
                            <div class="main-body">

                                <!-- Container-fluid starts -->
                                <div  class="page-wrapper">
                                  <!--
                                  <div class="page-header">
                                    <div class="page-header-title">
                                      <h4>{{ this.msg }}</h4>
                                    </div>
                                    <div class="page-header-breadcrumb">
                                      <ul class="breadcrumb-title">
                                        <li class="breadcrumb-item">
                                          <a href="index.html">
                                            <i class="icofont icofont-home"></i>
                                          </a>
                                        </li>
                                        <li class="breadcrumb-item">
                                          <a href="#!">Pages</a>
                                        </li>
                                        <li class="breadcrumb-item">
                                          <a href="#!">Dashboard</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                -->
                                  <div class="page-body">

                                    <router-view/>


                                  </div>
                                </div>

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
  name: 'app'
}
</script>

<style>

</style>
