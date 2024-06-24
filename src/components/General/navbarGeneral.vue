<template>
  <!-- Start Navbar -->
  <nav id="topnav" class="defaultscroll is-sticky">
    <div class="" :class="container">
      <router-link v-if="lightLogo" class="logo" to="/">
        <div class="block sm:hidden">
          <img
            src="../../assets/images/logo-icon-40.png"
            class="h-10 inline-block dark:hidden"
            alt=""
          />
          <img
            src="../../assets/images/logo-icon-40-white.png"
            class="h-10 hidden dark:inline-block"
            alt=""
          />
        </div>
        <div class="sm:block hidden">
          <span class="inline-block dark:hidden">
            <img
              src="../../assets/images/logo-dark.png"
              class="h-[70px] l-dark"
              alt=""
            />
            <img
              src="../../assets/images/logo-light.png"
              class="h-[70px] l-light"
              alt=""
            />
          </span>
          <img
            src="../../assets/images/logo-white.png"
            class="h-[24px] hidden dark:inline-block"
            alt=""
          />
        </div>
      </router-link>
      <!-- End Logo container-->

      <!-- Logo container-->
      <router-link v-else class="logo" to="/">
        <div class="block sm:hidden">
          <img
            src="../../assets/images/logo-icon-40.png"
            class="h-10 inline-block dark:hidden"
            alt=""
          />
          <img
            src="../../assets/images/logo-icon-40-white.png"
            class="h-10 hidden dark:inline-block"
            alt=""
          />
        </div>
        <div class="sm:block hidden">
          <img
            src="../../assets/images/logo-dark.png"
            class="h-[24px] inline-block dark:hidden"
            alt=""
          />
          <img
            src="../../assets/images/logo-white.png"
            class="h-[24px] hidden dark:inline-block"
            alt=""
          />
        </div>
      </router-link>
      <!-- End Logo container-->

      <!-- Logo container-->

      <!-- Start Mobile Toggle -->
      <div class="menu-extras" @click="handler">
        <div class="menu-item">
          <a
            class="navbar-toggle"
            id="isToggle"
            :class="toggle === false ? '' : 'open'"
          >
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </div>
      <!-- End Mobile Toggle -->

      <!--Login button End-->

      <div id="navigation" :class="toggle === false ? 'none' : 'block'">
        <!-- Navigation Menu-->
        <ul class="navigation-menu" :class="lightNav">
          <li
            :class="
              [
                '/index',
                '/',
                '/index-two',
                '/index-three',
                '/index-four',
                '/index-five',
                '/index-six',
                '/index-seven',
                '/index-eight',
                '/index-nine',
                '/index-ten',
              ].includes(activeMenu)
                ? 'active'
                : ''
            "
            class="has-submenu parent-menu-item"
          >
            <span class="menu-arrow"></span>
            <router-link to="" @click="submenu(menuOpen === '/' ? '' : '/')"
              >Inicio</router-link
            >
            <ul
              class="submenu"
              :class="
                [
                  '/index',
                  '/',
                  '/index-two',
                  '/index-three',
                  '/index-four',
                  '/index-five',
                  '/index-six',
                  '/index-seven',
                  '/index-eight',
                  '/index-nine',
                  '/index-ten',
                ].includes(menuOpen)
                  ? 'open'
                  : ''
              "
            >
              <li :class="activeMenu === '/' ? 'active' : ''">
                <router-link to="/" class="sub-menu-item">Hero One</router-link>
              </li>
              <li :class="activeMenu === '/index-two' ? 'active' : ''">
                <router-link to="/index-two" class="sub-menu-item"
                  >Hero Two</router-link
                >
              </li>
              <li :class="activeMenu === '/index-three' ? 'active' : ''">
                <router-link to="/index-three" class="sub-menu-item"
                  >Hero Three</router-link
                >
              </li>
              <li :class="activeMenu === '/index-four' ? 'active' : ''">
                <router-link to="/index-four" class="sub-menu-item"
                  >Hero Four</router-link
                >
              </li>
              <li :class="activeMenu === '/index-five' ? 'active' : ''">
                <router-link to="/index-five" class="sub-menu-item"
                  >Hero Five</router-link
                >
              </li>
              <li :class="activeMenu === '/index-six' ? 'active' : ''">
                <router-link to="/index-six" class="sub-menu-item"
                  >Hero Six
                </router-link>
              </li>
              <li :class="activeMenu === '/index-seven' ? 'active' : ''">
                <router-link to="/index-seven" class="sub-menu-item"
                  >Hero Seven
                </router-link>
              </li>
              <li :class="activeMenu === '/index-eight' ? 'active' : ''">
                <router-link to="/index-eight" class="sub-menu-item"
                  >Hero Eight</router-link
                >
              </li>
              <li :class="activeMenu === '/index-nine' ? 'active' : ''">
                <router-link to="/index-nine" class="sub-menu-item"
                  >Hero Nine</router-link
                >
              </li>
              <li :class="activeMenu === '/index-ten' ? 'active' : ''">
                <router-link to="/index-ten" class="sub-menu-item"
                  >Hero Ten</router-link
                >
              </li>
            </ul>
          </li>

          <li
            :class="
              [
                '/index-jobs',
                '/job-categories',
                '/job-grids',
                '/job-grid-one',
                '/job-grid-two',
                '/job-grid-three',
                '/job-grid-four',
                '/job-list',
                '/job-list-one',
                '/job-list-two',
                '/job-list-three',
                '/job-list-four',
                '/job-list-five',
                '/job-list-six',
                '/job-detail',
                '/job-detail-one',
                '/job-detail-two',
                '/job-detail-three',
                '/job-apply',
                '/job-post',
                '/career',
              ].includes(activeMenu)
                ? 'active'
                : ''
            "
            class="has-submenu parent-parent-menu-item"
          >
            <span class="menu-arrow"></span
            ><router-link
              to=""
              @click="submenu(menuOpen === '/pasantias' ? '' : '/pasantias')"
            >
              Pasantias
            </router-link>
            <ul
              class="submenu"
              :class="
                [
                  '/pasantias',
                  '/pasantias',
                  '/job-grid-two',
                  '/job-grid-three',
                  '/job-grid-four',
                  '/job-grids',
                  '/job-list',
                  '/job-detail',
                ].includes(menuOpen)
                  ? 'open'
                  : ''
              "
            >
              <li :class="activeMenu === '/pasantias' ? 'active' : ''">
                <router-link to="/pasantias" class="sub-menu-item"
                  >Job Categories</router-link
                >
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  [
                    '/job-grids',
                    '/job-grid-one',
                    '/job-grid-two',
                    '/job-grid-three',
                    '/job-grid-four',
                  ].includes(activeMenu)
                    ? 'active'
                    : ''
                "
              >
                <router-link
                  to=""
                  @click="
                    submenu(menuOpen === '/job-grids' ? '' : '/job-grids')
                  "
                >
                  Job Grids <span class="submenu-arrow"></span>
                </router-link>
                <ul
                  class="submenu"
                  :class="
                    [
                      '/job-grids',
                      '/job-grid-one',
                      '/job-grid-two',
                      '/job-grid-three',
                      '/job-grid-four',
                    ].includes(menuOpen)
                      ? 'open'
                      : ''
                  "
                >
                  <li :class="activeMenu === '/job-grid-one' ? 'active' : ''">
                    <router-link to="/job-grid-one" class="sub-menu-item"
                      >Job Grid One</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/job-grid-two' ? 'active' : ''">
                    <router-link to="/job-grid-two" class="sub-menu-item"
                      >Job Grid Two</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/job-grid-three' ? 'active' : ''">
                    <router-link to="/job-grid-three" class="sub-menu-item"
                      >Job Grid Three</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/job-grid-four' ? 'active' : ''">
                    <router-link to="/job-grid-four" class="sub-menu-item"
                      >Job Grid Four
                    </router-link>
                  </li>
                </ul>
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  [
                    '/job-list',
                    '/job-list-one',
                    '/job-list-two',
                    '/job-list-three',
                    '/job-list-four',
                    '/job-list-five',
                    '/job-list-six',
                  ].includes(activeMenu)
                    ? 'active'
                    : ''
                "
              >
                <router-link
                  to=""
                  @click="submenu(menuOpen === '/job-list' ? '' : '/job-list')"
                >
                  Job Lists </router-link
                ><span class="submenu-arrow"></span>
                <ul
                  class="submenu"
                  :class="
                    [
                      '/job-list',
                      '/job-list-one',
                      '/job-list-two',
                      '/job-list-three',
                      '/job-list-four',
                      '/job-list-five',
                      '/job-list-six',
                    ].includes(menuOpen)
                      ? 'open'
                      : ''
                  "
                >
                  <li :class="activeMenu === '/job-list-one' ? 'active' : ''">
                    <router-link to="/job-list-one" class="sub-menu-item"
                      >Job List One</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/job-list-two' ? 'active' : ''">
                    <router-link to="/job-list-two" class="sub-menu-item"
                      >Job List Two</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/job-list-three' ? 'active' : ''">
                    <router-link to="/job-list-three" class="sub-menu-item"
                      >Job List Three</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/job-list-four' ? 'active' : ''">
                    <router-link to="/job-list-four" class="sub-menu-item"
                      >Job List Four</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/job-list-five' ? 'active' : ''">
                    <router-link to="/job-list-five" class="sub-menu-item"
                      >Job List Five
                    </router-link>
                  </li>
                  <li :class="activeMenu === '/job-list-six' ? 'active' : ''">
                    <router-link to="/job-list-six" class="sub-menu-item"
                      >Job List Six
                    </router-link>
                  </li>
                </ul>
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  [
                    '/job-detail',
                    '/job-detail-one',
                    '/job-detail-two',
                    '/job-detail-three',
                  ].includes(activeMenu)
                    ? 'active'
                    : ''
                "
              >
                <router-link
                  to=""
                  @click="
                    submenu(menuOpen === '/job-detail' ? '' : '/job-detail')
                  "
                >
                  Job Detail </router-link
                ><span class="submenu-arrow"></span>
                <ul
                  class="submenu"
                  :class="
                    [
                      '/job-detail',
                      '/job-detail-one',
                      '/job-detail-two',
                      '/job-detail-three',
                    ].includes(menuOpen)
                      ? 'open'
                      : ''
                  "
                >
                  <li :class="activeMenu === '/job-detail-one' ? 'active' : ''">
                    <router-link to="/job-detail-one" class="sub-menu-item"
                      >Job Detail One</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/job-detail-two' ? 'active' : ''">
                    <router-link to="/job-detail-two" class="sub-menu-item"
                      >Job Detail Two</router-link
                    >
                  </li>
                  <li
                    :class="activeMenu === '/job-detail-three' ? 'active' : ''"
                  >
                    <router-link to="/job-detail-three" class="sub-menu-item"
                      >Job Detail Three</router-link
                    >
                  </li>
                </ul>
              </li>

              <li :class="activeMenu === '/job-apply' ? 'active' : ''">
                <router-link to="/job-apply" class="sub-menu-item"
                  >Job Apply</router-link
                >
              </li>

              <li :class="activeMenu === '/job-post' ? 'active' : ''">
                <router-link to="/job-post" class="sub-menu-item"
                  >Job Post
                </router-link>
              </li>

              <li :class="activeMenu === '/career' ? 'active' : ''">
                <router-link to="/career" class="sub-menu-item"
                  >Career
                </router-link>
              </li>
            </ul>
          </li>

          <li
            class="has-submenu parent-parent-menu-item"
            :class="
              [
                '/pages',
                '/aboutus',
                '/services',
                '/pricing',
                '/employer',
                '/employer-list',
                '/employer-detail',
                '/candidate',
                '/candidate-list',
                '/candidate-profile',
                '/candidate-profile-setting',
                '/helpcenter-overview',
                '/helpcenter-faqs',
                '/helpcenter-guides',
                '/helpcenter-support',
                '/helpcenter',
                '/blog',
                '/blogs',
                '/blog-detail',
                '/auth-pages',
                '/login',
                '/signup',
                '/reset-password',
                '/lock-screen',
                '/utility',
                '/terms',
                '/privacy',
                '/special',
                '/comingsoon',
                '/maintenance',
                '/error',
                '/thankyou',
              ].includes(activeMenu)
                ? 'active'
                : ''
            "
          >
            <span class="menu-arrow"></span>
            <router-link
              to=""
              @click="submenu(menuOpen === '/pages' ? '' : '/pages')"
              >Empresas</router-link
            >
            <ul
              class="submenu"
              :class="
                [
                  '/pages',
                  '/aboutus',
                  '/services',
                  '/pricing',
                  '/employer',
                  '/candidate',
                  '/helpcenter',
                  '/blog',
                  '/auth-pages',
                  '/utility',
                  '/special',
                ].includes(menuOpen)
                  ? 'open'
                  : ''
              "
            >
              <li :class="activeMenu === '/aboutus' ? 'active' : ''">
                <router-link to="/aboutus" class="sub-menu-item"
                  >About Us</router-link
                >
              </li>
              <li :class="activeMenu === '/services' ? 'active' : ''">
                <router-link to="/services" class="sub-menu-item"
                  >Services</router-link
                >
              </li>
              <li :class="activeMenu === '/pricing' ? 'active' : ''">
                <router-link to="/pricing" class="sub-menu-item"
                  >Pricing
                </router-link>
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  ['/employer', '/employer-list', '/employer-detail'].includes(
                    activeMenu
                  )
                    ? 'active'
                    : ''
                "
              >
                <router-link
                  to=""
                  @click="submenu(menuOpen === '/employer' ? '' : '/employer')"
                  >Employers<span class="submenu-arrow"></span
                ></router-link>
                <ul
                  class="submenu"
                  :class="
                    [
                      '/employer',
                      '/employer-detail',
                      '/employer-detail',
                    ].includes(menuOpen)
                      ? 'open'
                      : ''
                  "
                >
                  <li :class="activeMenu === '/employer-list' ? 'active' : ''">
                    <router-link to="/employer-list" class="sub-menu-item"
                      >Employers</router-link
                    >
                  </li>
                  <li
                    :class="activeMenu === '/employer-detail' ? 'active' : ''"
                  >
                    <router-link to="/employer-detail" class="sub-menu-item"
                      >Employer Detail</router-link
                    >
                  </li>
                </ul>
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  [
                    '/candidate',
                    '/candidate-list',
                    '/candidate-profile',
                    '/candidate-profile-setting',
                  ].includes(activeMenu)
                    ? 'active'
                    : ''
                "
              >
                <router-link
                  to=""
                  @click="
                    submenu(menuOpen === '/candidate' ? '' : '/candidate')
                  "
                  >Candidates </router-link
                ><span class="submenu-arrow"></span>
                <ul
                  class="submenu"
                  :class="
                    [
                      '/candidate',
                      '/candidate-list',
                      '/candidate-profile',
                      '/candidate-profile-setting',
                    ].includes(menuOpen)
                      ? 'open'
                      : ''
                  "
                >
                  <li :class="activeMenu === '/candidate-list' ? 'active' : ''">
                    <router-link to="/candidate-list" class="sub-menu-item"
                      >Candidates</router-link
                    >
                  </li>
                  <li
                    :class="activeMenu === '/candidate-profile' ? 'active' : ''"
                  >
                    <router-link to="/candidate-profile" class="sub-menu-item"
                      >Candidate Profile</router-link
                    >
                  </li>
                  <li
                    :class="
                      activeMenu === '/candidate-profile-setting'
                        ? 'active'
                        : ''
                    "
                  >
                    <router-link
                      to="/candidate-profile-setting"
                      class="sub-menu-item"
                      >Profile Settings
                    </router-link>
                  </li>
                </ul>
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  [
                    '/helpcenter-overview',
                    '/helpcenter-faqs',
                    '/helpcenter-guides',
                    '/helpcenter-support',
                    '/helpcenter',
                  ].includes(activeMenu)
                    ? 'active'
                    : ''
                "
              >
                <router-link
                  to=""
                  @click="
                    submenu(menuOpen === '/helpcenter' ? '' : '/helpcenter')
                  "
                >
                  Helpcenter </router-link
                ><span class="submenu-arrow"></span>
                <ul
                  class="submenu"
                  :class="
                    [
                      '/helpcenter-overview',
                      '/helpcenter-faqs',
                      '/helpcenter-guides',
                      '/helpcenter-support',
                      '/helpcenter',
                    ].includes(menuOpen)
                      ? 'open'
                      : ''
                  "
                >
                  <li
                    :class="
                      activeMenu === '/helpcenter-overview' ? 'active' : ''
                    "
                  >
                    <router-link to="/helpcenter-overview" class="sub-menu-item"
                      >Overview</router-link
                    >
                  </li>
                  <li
                    :class="activeMenu === '/helpcenter-faqs' ? 'active' : ''"
                  >
                    <router-link to="/helpcenter-faqs" class="sub-menu-item"
                      >FAQs</router-link
                    >
                  </li>
                  <li
                    :class="activeMenu === '/helpcenter-guides' ? 'active' : ''"
                  >
                    <router-link to="/helpcenter-guides" class="sub-menu-item"
                      >Guides</router-link
                    >
                  </li>
                  <li
                    :class="
                      activeMenu === '/helpcenter-support' ? 'active' : ''
                    "
                  >
                    <router-link to="/helpcenter-support" class="sub-menu-item"
                      >Support</router-link
                    >
                  </li>
                </ul>
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  ['/blog', '/blogs', '/blog-detail'].includes(activeMenu)
                    ? 'active'
                    : ''
                "
              >
                <router-link
                  to=""
                  @click="submenu(menuOpen === '/blog' ? '' : '/blog')"
                >
                  Blog </router-link
                ><span class="submenu-arrow"></span>
                <ul
                  class="submenu"
                  :class="
                    ['/blog', '/blogs', '/blog-detail'].includes(menuOpen)
                      ? 'open'
                      : ''
                  "
                >
                  <li :class="activeMenu === '/blogs' ? 'active' : ''">
                    <router-link to="/blogs" class="sub-menu-item">
                      Blogs</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/blog-detail' ? 'active' : ''">
                    <router-link to="/blog-detail" class="sub-menu-item">
                      Blog Detail</router-link
                    >
                  </li>
                </ul>
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  [
                    '/auth-pages',
                    '/login',
                    '/signup',
                    '/reset-password',
                    '/lock-screen',
                  ].includes(activeMenu)
                    ? 'active'
                    : ''
                "
              >
                <router-link
                  to=""
                  @click="
                    submenu(menuOpen === '/auth-pages' ? '' : '/auth-pages')
                  "
                >
                  Auth Pages </router-link
                ><span class="submenu-arrow"></span>
                <ul
                  class="submenu"
                  :class="
                    [
                      '/auth-pages',
                      '/login',
                      '/signup',
                      '/reset-password',
                      '/lock-screen',
                    ].includes(menuOpen)
                      ? 'open'
                      : ''
                  "
                >
                  <li :class="activeMenu === '/login' ? 'active' : ''">
                    <router-link to="/login" class="sub-menu-item">
                      Login</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/signup' ? 'active' : ''">
                    <router-link to="/signup" class="sub-menu-item">
                      Signup</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/reset-password' ? 'active' : ''">
                    <router-link to="/reset-password" class="sub-menu-item">
                      Forgot Password</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/lock-screen' ? 'active' : ''">
                    <router-link to="/lock-screen" class="sub-menu-item">
                      Lock Screen</router-link
                    >
                  </li>
                </ul>
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  ['/utility', '/terms', '/privacy'].includes(activeMenu)
                    ? 'active'
                    : ''
                "
              >
                <router-link
                  to=""
                  @click="submenu(menuOpen === '/utility' ? '' : '/utility')"
                >
                  Utility </router-link
                ><span class="submenu-arrow"></span>
                <ul
                  class="submenu"
                  :class="
                    ['/utility', '/terms', '/privacy'].includes(menuOpen)
                      ? 'open'
                      : ''
                  "
                >
                  <li :class="activeMenu === '/terms' ? 'active' : ''">
                    <router-link to="/terms" class="sub-menu-item"
                      >Terms of Services</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/privacy' ? 'active' : ''">
                    <router-link to="/privacy" class="sub-menu-item"
                      >Privacy Policy</router-link
                    >
                  </li>
                </ul>
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  [
                    '/special',
                    '/comingsoon',
                    '/maintenance',
                    '/error',
                    '/thankyou',
                  ].includes(activeMenu)
                    ? 'active'
                    : ''
                "
              >
                <router-link
                  to=""
                  @click="submenu(menuOpen === '/special' ? '' : '/special')"
                >
                  Special </router-link
                ><span class="submenu-arrow"></span>
                <ul
                  class="submenu"
                  :class="
                    [
                      '/special',
                      '/comingsoon',
                      '/maintenance',
                      '/error',
                      '/thankyou',
                    ].includes(menuOpen)
                      ? 'open'
                      : ''
                  "
                >
                  <li :class="activeMenu === '/comingsoon' ? 'active' : ''">
                    <router-link to="/comingsoon" class="sub-menu-item">
                      Coming Soon</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/maintenance' ? 'active' : ''">
                    <router-link to="/maintenance" class="sub-menu-item">
                      Maintenance</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/error' ? 'active' : ''">
                    <router-link to="/error" class="sub-menu-item">
                      404!</router-link
                    >
                  </li>
                  <li :class="activeMenu === '/thankyou' ? 'active' : ''">
                    <router-link to="/thankyou" class="sub-menu-item">
                      Thank you</router-link
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li :class="activeMenu === '/contact' ? 'active' : ''">
            <router-link to="/contact" class="sub-menu-item"
              >Contactanos</router-link
            >
          </li>
          <div class="jhessika">
            <li :class="activeMenu === '/contact' ? 'active' : ''">
              <router-link to="/contact" class="sub-menu-item"
                >Iniciar Sesión</router-link
              >
            </li>
          </div>
        </ul>
        <!--end navigation menu-->
      </div>
      <!--end navigation-->
    </div>
    <!--end container-->
  </nav>
  <!--end header-->
  <!-- End Navbar -->
</template>

<script>
import vClickOutside from "v-click-outside";
import feather from "feather-icons";
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    lightLogo: {
      type: Boolean,
      required: true,
    },
    lightNav: {
      type: String,
      required: true,
    },
    container: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      toggle: false,
      activeMenu: "",
      menu: true,
      menuOpen: "",
      dropdownOpen: false,
    };
  },
  created() {
    this.activeMenu = window.location.pathname;
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
    feather.replace();
    this.scrollToTop();
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("click", this.handleClickOutside);
  },

  methods: {
    handler() {
      this.toggle = !this.toggle;
    },
    submenu(item) {
      this.menu = !this.menu;
      this.menuOpen = item;
    },
    handleScroll() {
      const navbar = document.getElementById("topnav");
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        navbar.classList.add("nav-sticky");
      } else {
        navbar.classList.remove("nav-sticky");
      }
    },
    handleClickOutside(event) {
      if (!this.$refs.dropdownToggle.contains(event.target)) {
        this.dropdownOpen = false;
      }
    },

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.jhessika {
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: rgb(0, 148, 188);
  color: rgb(255, 255, 255);
  border-radius: 0.385rem;
  height: 3rem;
}

.jhessika:hover {
  background-color: rgb(22, 102, 148);
}
</style>
