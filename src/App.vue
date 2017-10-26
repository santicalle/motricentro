<template>
  <div id="app">    
    <div id="pcoded" class="pcoded">
      <div class="pcoded-overlay-box"></div>
      <div class="pcoded-container navbar-wrapper">
        <nav class="navbar header-navbar pcoded-header" header-theme="theme4">
          <div class="navbar-wrapper">
            <div class="navbar-logo">
              <a class="mobile-menu" id="mobile-collapse" href="#!">
                <i class="ti-menu"></i>
              </a>
              <a class="mobile-search morphsearch-search" href="#">
                <i class="ti-search"></i>
              </a>
              <a href="index.html">
                <img class="img-fluid" src="/static/template/Theme/assets/images/logo.png" alt="Theme-Logo" />
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
                      <span class="badge">5</span>
                    </a>
                    <ul class="show-notification">
                      <li>
                        <h6>Notifications</h6>
                        <label class="label label-danger">New</label>
                      </li>
                      <li>
                        <div class="media">
                          <img class="d-flex align-self-center" src="/static/template/Theme/assets/images/user.png" alt="Generic placeholder image">
                          <div class="media-body">
                            <h5 class="notification-user">John Doe</h5>
                            <p class="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                            <span class="notification-time">30 minutes ago</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <img class="d-flex align-self-center" src="/static/template/Theme/assets/images/user.png" alt="Generic placeholder image">
                          <div class="media-body">
                            <h5 class="notification-user">Joseph William</h5>
                            <p class="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                            <span class="notification-time">30 minutes ago</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <img class="d-flex align-self-center" src="/static/template/Theme/assets/images/user.png" alt="Generic placeholder image">
                          <div class="media-body">
                            <h5 class="notification-user">Sara Soudein</h5>
                            <p class="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                            <span class="notification-time">30 minutes ago</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li class="user-profile header-notification">
                    <a href="#!">
                      <img src="/static/template/Theme/assets/images/user.png" alt="User-Profile-Image">
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



        <!-- Sidebar -->
        <div class="pcoded-main-container">
          <div class="pcoded-wrapper">
            <nav class="pcoded-navbar" pcoded-header-position="relative">
              <div class="pcoded-navigatio-lavel" data-i18n="nav.category.navigation" menu-title-theme="theme5">Navigation</div>
              <ul class="pcoded-item pcoded-left-item">
                <li class="pcoded-hasmenu active pcoded-trigger">
                  <a href="javascript:void(0)">
                    <span class="pcoded-micon">
                      <i class="ti-home"></i>
                    </span>
                    <span class="pcoded-mtext" data-i18n="nav.dash.main">Demo</span>
                    <span class="pcoded-mcaret"></span>
                  </a>
                  <ul class="pcoded-submenu">
                    <li class="active">
                      <router-link :to="'/herramienta'">
                        <span class="pcoded-micon">
                          <i class="ti-angle-right"></i>
                        </span>
                        <span class="pcoded-mtext" data-i18n="nav.dash.default">Producto</span>
                        <span class="pcoded-mcaret"></span>
                      </router-link>
                    </li>
                    <li class=" ">
                      <a href="dashboard-ecommerce.html">
                        <span class="pcoded-micon">
                          <i class="ti-angle-right"></i>
                        </span>
                        <span class="pcoded-mtext" data-i18n="nav.dash.ecommerce">Ecommerce</span>
                        <span class="pcoded-mcaret"></span>
                      </a>
                    </li>
                    <li class=" ">
                      <a href="dashboard-crm.html">
                        <span class="pcoded-micon">
                          <i class="ti-angle-right"></i>
                        </span>
                        <span class="pcoded-mtext" data-i18n="nav.dash.crm">CRM</span>
                        <span class="pcoded-mcaret"></span>
                      </a>
                    </li>
                    <li class=" ">
                      <a href="dashboard-analytics.html">
                        <span class="pcoded-micon">
                          <i class="ti-angle-right"></i>
                        </span>
                        <span class="pcoded-mtext" data-i18n="nav.dash.analytics">Analytics</span>
                        <span class="pcoded-badge label label-info ">NEW</span>
                        <span class="pcoded-mcaret"></span>
                      </a>
                    </li>
                    <li class=" ">
                      <a href="dashboard-project.html">
                        <span class="pcoded-micon">
                          <i class="ti-angle-right"></i>
                        </span>
                        <span class="pcoded-mtext" data-i18n="nav.dash.project">Project</span>
                        <span class="pcoded-mcaret"></span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div class="pcoded-content">
              <div class="pcoded-inner-content">
                <div class="main-body">
                  <div class="page-wrapper">
                    <div class="page-header">
                      <div class="page-header-title">
                        <h4>Dashboard</h4>
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
                    <div class="page-body">

                      <router-view/>
                      <!-- built files will be auto injected -->

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
