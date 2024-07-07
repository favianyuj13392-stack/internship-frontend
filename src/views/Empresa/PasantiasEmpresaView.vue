<template>
    <navbar
      :container="'container'"
      :lightNav="'nav-light justify-end'"
      :lightLogo="true"
    />
    <!-- Start Hero -->
    <section
      class="relative table w-full py-36 bg-[url('../../assets/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover"
    >
      <div class="absolute inset-0 bg-cyan-900/90"></div>
      <div class="container">
        <div class="grid grid-cols-1 text-center mt-10">
          <h3
            class="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white"
          >
            Pasantías de {Empresa}
          </h3>
        </div>
        <!--end grid-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <div class="relative">
      <div
        class="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900"
      >
        <svg
          class="w-full h-auto"
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!-- End Hero -->
    <section class="relative md:py-24 py-16">
      <div class="container">
        <button     style="min-width: 100%; min-height: 3rem; margin-top: 0rem; margin-bottom: 2rem;"            class="btn btn-sm bg-cyan-600 hover:bg-cyan-700 border-cyan-600 dark:border-cyan-600 text-white rounded-md"
        >Crear pasantía</button>

        <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
          
  
          <!--TARTJETAZOOO-->
          <div class="lg:col-span-12 md:col-span-12">
            <div class="grid lg:grid-cols-3 md:grid-cols-3 gap-[30px]">
              <div
                v-for="item in datas"
                :key="item"
                class="group p-6 rounded-lg border border-cyan-600/20 dark:border-cyan-600/40 bg-white dark:bg-slate-900 hover:bg-cyan-600/[0.02] hover:dark:bg-cyan-600/5 hover:shadow-md hover:shadow-cyan-600/5 transition-all duration-500"
              >
                <div class="flex justify-between items-start">
                  <div>
                    <div
                      class="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full mb-2"
                    >
                      <img :src="item.image" class="size-8" alt="" />
                    </div>
                    <router-link
                    to="/empresa/administrador/pasantias/informacion/1"
                      class="text-lg hover:text-cyan-600 font-semibold transition-all duration-500"
                      >{{ item.name }}</router-link
                    >
                  </div>
  
                  <div class="flex items-center">
                    <router-link
                    to="/empresa/administrador/pasantias/informacion/1"
                    class="btn btn-icon rounded-full bg-cyan-600/5 group-hover:bg-cyan-600 border-cyan-600/10 text-cyan-600 group-hover:text-white ms-1"
                      ><i class="uil uil-arrow-up-right"></i
                    ></router-link>
                  </div>
                </div>
  
                <div class="mt-3">
                  <router-link
                    class="text-xl hover:text-cyan-600 font-semibold transition-all duration-500"
                    >{{ item.job }}</router-link
                  >
                  <p class="text-slate-400 mt-2">
                    Looking for an experienced Web Designer for an our company.
                  </p>
  
                  <div class="mt-3">
                    <a href="">
                      <span
                        class="bg-rose-500/5 hover:bg-rose-500/20 dark:bg-rose-500/10 hover:dark:bg-rose-500/30 inline-block text-rose-500 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500"
                        >{{ item.type }}</span
                      >
                    </a>
                    <a href="">
                      <span
                        class="bg-purple-600/5 hover:bg-yellow-600/20 dark:bg-purple-600/10 hover:dark:bg-purple-600/30 inline-block text-purple-600 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500"
                        >{{ item.salary }}</span
                      >
                    </a>
                    <a href="">
                      <span
                        class="bg-cyan-600/5 hover:bg-cyan-600/20 dark:bg-cyan-600/10 hover:dark:bg-cyan-600/30 inline-block text-cyan-600 px-4 text-[14px] font-medium rounded-full mt-2 transition-all duration-500"
                        ><i class="uil uil-map-marker"></i>
                        {{ item.location }}</span
                      >
                    </a>
                  </div>
                </div>
              </div>
              <!--end content-->
            </div>
            <!--end grid-->
            <!--end grid-->
            <!--PAGINACIONNN-->
            <div class="grid md:grid-cols-12 grid-cols-1 mt-8">
              <div class="md:col-span-12 text-center">
                <nav aria-label="Page navigation example">
                  <ul class="inline-flex items-center -space-x-px">
                    <li>
                      <a
                        href="#"
                        class="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600"
                      >
                        <i
                          class="uil uil-angle-left text-[20px] rtl:rotate-180 rtl:-mt-1"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600"
                        >1</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600"
                        >2</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        aria-current="page"
                        class="z-10 size-[40px] inline-flex justify-center items-center text-white bg-cyan-600 border border-cyan-600"
                        >3</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600"
                        >4</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600"
                        >5</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600"
                      >
                        <i
                          class="uil uil-angle-right text-[20px] rtl:rotate-180 rtl:-mt-1"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <!--end col-->
            </div>
            <!--end grid-->
            <!--FIN DE PAGINACION-->
          </div>
        </div>
      </div>
    </section>
    <footers />
    <switcher />
  </template>
  <script>
  import navbar from "@/components/Empresa/NavBarEmpresa.vue";
  
  import explore from "@/components/General/Home/explore-job.vue";
  import footers from "@/components/footer/footer.vue";

import switcher from "@/components/General/switcher.vue";
import {useInstitucionesAdministracionStore} from "@/stores/Instituciones/InstitucionesAdministracionStore.js";
import Swal from "sweetalert2";
  export default {
    setup() {
      const institucionesAdministracionStore = useInstitucionesAdministracionStore();
      return {
        institucionesAdministracionStore,
      };
    },

    
    methods: {
      async fetchPasantias(){
        let loader = this.$loading.show();
        const response = await this.institucionesAdministracionStore.fetchPasantiasInstitucionByUUID(this.$keycloak.tokenParsed.sub);
        loader.hide();
        if(response==null){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se pudo cargar las pasantías',
          })

        }
        console.log(response);
      },
  
      },
      mounted() {
        this.fetchPasantias();
      },

    data() {
      return {
        datas: [
          {
            id: 1,
            image:
              "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
            name: "Facebook",
            job: "Web Designer / Developer",
            title: "Looking for an experienced Web Designer for an our company.",
            type: "Full Time",
            salary: "$4,000 - $4,500",
            location: "Australia",
          },
          {
            id: 2,
            image:
              "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
            name: "Google",
            job: "Marketing Director",
            title: "Looking for an experienced Web Designer for an our company.",
            type: "Full Time",
            salary: "$4,000 - $4,500",
            location: "Australia",
          },
          {
            id: 3,
            image:
              "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
            name: "Android",
            job: "Application Developer",
            title: "Looking for an experienced Web Designer for an our company.",
            type: "Full Time",
            salary: "$4,000 - $4,500",
            location: "Australia",
          },
          {
            id: 4,
            image:
              "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
            name: "Lenovo",
            job: "Senior Product Designer",
            title: "Looking for an experienced Web Designer for an our company.",
            type: "Full Time",
            salary: "$4,000 - $4,500",
            location: "Australia",
          },
          {
            id: 5,
            image:
              "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
            name: "Spotify",
            job: "C++ Developer",
            title: "Looking for an experienced Web Designer for an our company.",
            type: "Full Time",
            salary: "$4,000 - $4,500",
            location: "Australia",
          },
          {
            id: 6,
            image:
              "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
            name: "Linkedin",
            job: "Php Developer",
            title: "Looking for an experienced Web Designer for an our company.",
            type: "Full Time",
            salary: "$4,000 - $4,500",
            location: "Australia",
          },
          {
            id: 7,
            image:
              "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
            name: "Circle CI",
            job: "Web Designer / Developer",
            title: "Looking for an experienced Web Designer for an our company.",
            type: "Full Time",
            salary: "$4,000 - $4,500",
            location: "Australia",
          },
          {
            id: 8,
            image:
              "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
            name: "Skype",
            job: "Marketing Director",
            title: "Looking for an experienced Web Designer for an our company.",
            type: "Full Time",
            salary: "$4,000 - $4,500",
            location: "Australia",
          },
          {
            id: 9,
            image:
              "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
            name: "Snapchat",
            job: "Application Developer",
            title: "Looking for an experienced Web Designer for an our company.",
            type: "Full Time",
            salary: "$4,000 - $4,500",
            location: "Australia",
          },
          {
            id: 10,
            image:
              "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
            name: "Shreethemes",
            job: "Senior Product Designer",
            title: "Looking for an experienced Web Designer for an our company.",
            type: "Full Time",
            salary: "$4,000 - $4,500",
            location: "Australia",
          },
          {
            id: 11,
            image:
              "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
            name: "Telegram",
            job: "C++ Developer",
            title: "Looking for an experienced Web Designer for an our company.",
            type: "Full Time",
            salary: "$4,000 - $4,500",
            location: "Australia",
          },
          {
            id: 12,
            image:
              "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
            name: "Whatsapp",
            job: "Php Developer",
            title: "Looking for an experienced Web Designer for an our company.",
            type: "Full Time",
            salary: "$4,000 - $4,500",
            location: "Australia",
          },
        ],
      };
    },
    components: {
      navbar,
  
      explore,
      footers,
      switcher,
    },
  };
  </script>
  
  <style lang="scss" scoped></style>
  