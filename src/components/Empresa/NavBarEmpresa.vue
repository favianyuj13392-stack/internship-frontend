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
            <li :class="activeMenu === '/empresa/administrador/informacion' ? 'active' : ''">
              <router-link to="/empresa/administrador/informacion" class="sub-menu-item">Empresa</router-link>
            </li>
  
            <li :class="activeMenu === '/empresa/administrador/pasantias' ? 'active' : ''">
              <router-link to="/empresa/administrador/pasantias" class="sub-menu-item"
                >Pasantías</router-link
              >
            </li>
  
           
  
            <ul class="buy-button list-none mb-0">
          <li class="dropdown inline-block relative ps-1">
            <button
              data-dropdown-toggle="dropdown"
              class="dropdown-toggle items-center"
              type="button"
              ref="dropdownToggle"
              @click="dropdownOpen = !dropdownOpen"
            >
              <span
                class="btn btn-icon rounded-full bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white"
                ><img
                  src="../../assets/images/team/01.jpg"
                  class="rounded-full"
                  alt=""
              /></span>
            </button>
            <!-- Dropdown menu -->
            <div
              class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700"
              v-show="dropdownOpen"
            >
              <ul class="py-2 text-start">
                <li>
                  <router-link
                    to="/candidate-profile"
                    class="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white"
                    ><i data-feather="user" class="size-4 me-2"></i
                    >Profile</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/candidate-profile-setting"
                    class="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white"
                    ><i data-feather="settings" class="size-4 me-2"></i
                    >Settings</router-link
                  >
                </li>
                <li
                  class="border-t border-gray-100 dark:border-gray-800 my-2"
                ></li>
                <li>
                  <router-link
                    to="/lock-screen"
                    class="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white"
                    ><i data-feather="lock" class="size-4 me-2"></i
                    >Lockscreen</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/"
                    class="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white"
                    ><i data-feather="log-out" class="size-4 me-2"></i
                    >Logout</router-link
                  >
                </li>
              </ul>
            </div>
          </li>
          <!--end dropdown-->
        </ul>
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
  