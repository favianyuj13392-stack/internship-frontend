<template>
  <navbar
    :lightLogo="true"
    :lightNav="'nav-light justify-end'"
    :container="'container'"
  />
  <!-- Start -->
  <section
    class="py-20 w-full table relative bg-[url('../../assets/images/hero/bg2.jpg')] bg-top bg-no-repeat bg-cover"
  >
    <div class="absolute inset-0 bg-slate-900/70"></div>
    <div class="container relative">
      <div class="grid grid-cols-1 text-center">
        <h3 class="mb-4 md:text-[26px] text-2xl text-white font-medium">
          Empresas Solicitantes
        </h3>

        <p class="text-white/80 max-w-xl mx-auto">
          Lugar donde podras visualizar las empresas que solicitan pasantes.
        </p>

        <a
          @click="toggle"
          data-type="youtube"
          data-id="S_CGed6E610"
          class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-cyan-600 mx-auto mt-10 cursor-pointer"
        >
          <i
            class="mdi mdi-play inline-flex items-center justify-center text-2xl"
          ></i>
        </a>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- End -->

  <!-- iframe start  -->
  <div
    :class="isActive ? 'fixed' : 'hidden'"
    class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999"
  >
    <div class="h-[100%] flex items-center justify-center">
      <iframe
        src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed"
        width="700"
        height="500"
        frameborder="0"
      ></iframe>
    </div>
    <button class="text-slate-400 absolute top-[20px] right-[20px]">
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-5"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        @click="toggle"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
  <section class="relative -mt-[42px]">
    <div class="container z-1">
      <div class="d-flex" id="reserve-form">
        <div class="md:w-5/6 mx-auto">
          <div class="lg:col-span-10">
            <div
              class="bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3"
            >
              <form action="#">
                <div class="registration-form text-dark text-start">
                  <div
                    class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6"
                  >
                    <div class="filter-search-form relative filter-border">
                      <i class="uil uil-briefcase-alt icons"></i>
                      <input
                        name="name"
                        type="text"
                        id="job-keyword"
                        class="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                        placeholder="Buscar empresa..."
                        v-model="searchValue"
                        @keyup.enter="searchEmpresas"
                      />
                    </div>

                    <input
                      type="submit"
                      id="search"
                      name="search"
                      style="height: 60px"
                      class="btn bg-cyan-600 hover:bg-cyan-700 border-cyan-600 hover:border-cyan-700 text-white searchbtn submit-btn w-100"
                      value="Buscar"
                      @click.prevent="searchEmpresas"
                    />
                  </div>
                  <!--end grid-->
                </div>
                <!--end container-->
              </form>
            </div>
          </div>
          <!--ed col-->
        </div>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->
    <div class="container mt-10">
      <div class="grid grid-cols-1 gap-[30px]">
        <listone />
      </div>
    </div>
  </section>

  <div class="container mt-2">
    <div class="grid grid-cols-1 gap-[30px]">
      <div
        v-for="item in datas"
        :key="item"
        class="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5"
      >
        <div class="flex items-center">
          <div
            class="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md"
          >
            <img :src="item.fotoInstitucion" class="size-8" alt="" />
          </div>
          <router-link
            class="text-lg hover:text-cyan-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]"
            >{{ item.nombre }}</router-link
          >
        </div>

        <div class="md:block flex justify-between md:mt-0 mt-2 mr-1">
          <span class="text-slate-400"
            ><i class="uil uil-map-marker"></i> {{ item.direccion }}</span
          >
          <span class="block font-semibold md:mt-1 mt-0">{{
            item.correo
          }}</span>
        </div>
        <div class="md:block flex justify-between md:mt-0 mt-2">
        </div>

        <div class="md:mt-0 mt-4">
          <a
            href=""
            class="btn btn-icon rounded-full bg-yellow-600/5 hover:bg-yellow-600 border-yellow-600/10 hover:border-yellow-600 text-yellow-600 hover:text-white md:relative absolute top-0 end-0 md:m-0 m-3"
            >
            <i class="uil-fast-mail"></i>
          </a>
          <router-link
            to="/administrador/empresa/solicitud/usuario"
            class="btn rounded-md bg-cyan-600 hover:bg-cyan-700 border-cyan-600 hover:border-cyan-700 text-white md:ms-2 w-full md:w-auto mt-2"
            >Más información</router-link
          >
        </div>
      </div>
      <!--end content-->
    </div>
  </div>
    <!--PAGINACIONNN-->
    <div class="grid md:grid-cols-12 grid-cols-1 mt-8">
    <div class="md:col-span-12 text-center">
      <nav aria-label="Page navigation example">
        <ul class="inline-flex items-center -space-x-px">
          <li>
            <button
              @click="prevPage"
              :disabled="currentPage === 0"
              class="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600"
            >
              <i class="uil uil-angle-left text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
            </button>
          </li>
          <li v-for="page in totalPages" :key="page">
            <button
              @click="goToPage(page-1)"
              :class="[
                'size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-cyan dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600',
                { 'z-10 bg-cyan-600 text-white border-cyan-600': page-1 === currentPage }
              ]"
            >
              {{ page }}
            </button>
          </li>
          <li>
            <button
              @click="nextPage"
              :disabled="currentPage === totalPages - 1"
              class="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600"
            >
              <i class="uil uil-angle-right text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <!--end col-->
  </div>
  <!--end grid-->
  <!--FIN DE PAGINACION-->

  <!-- iframe end  -->
  <div class="md:my-16 my-16">
    <counter />
  </div>
  <!--end section-->
  <!--end section-->
  <!-- Hero End
  
      <h1>hola</h1>
      
  
  
      <company />
  
  
  
    <div class="container md:py-10 py-10">
        <services />
      </div>
  
      <popularjob />
      <company />
   -->

  <switcher />
  <footers />
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import navbar from "@/components/Administrador/navbarAdministrador.vue";
import counter from "@/components/General/Home/counter.vue";
import services from "@/components/General/Home/job-services.vue";
import popularjob from "@/components/General/Home/popular-job.vue";
import company from "@/components/General/Home/best-companies.vue";
import cta from "@/components/General/Home/two-job-cta.vue";
import question from "@/components/General/Home/job-questions.vue";
import explore from "@/components/General/Home/explore-job.vue";
import switcher from "@/components/General/switcher.vue";
import footers from "@/components/footer/footer.vue";
import { useEmpresasAdminStore } from "@/stores/Administradores/empresasAdminStore"; 
export default {
  mounted() {
    this.fetchEmpresas();
  },
  data() {
    return {
      isActive: false,
      options: [
        "Ingenieria de Sistemas",
        "Comunicación",
        "Psicopedagogia",
        "Administracion",
      ],
      selected: "Ingenieria de Sistemas",
      empresaStore: useEmpresasAdminStore(),
      pageSize: 12,
      currentPage: 0,
      searchValue: "",
      totalPages: 0,
      datas: [
        {
          id: 1,
          image:
            "https://img.freepik.com/fotos-premium/adorable-bebe-leon-sonrisa-estilo-pixar-ojos-grandes_804788-4863.jpg",
          day: "20th Feb 2023",
          type: "Full Time",
          job: " NOMBRE EMPRESA",
          country: "Miraflores",
          salary: "$4,000 - $4,500",
          class:
            "w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1",
          icon: "uil uil-star",
          correo: "@ucb.edu.bo",
          nombre: "Nombre",
        },
        {
          id: 2,
          image:
            "https://img.freepik.com/fotos-premium/adorable-bebe-leon-sonrisa-estilo-pixar-ojos-grandes_804788-4863.jpg",
          day: "20th Feb 2023",
          type: "Full Time",
          job: " NOMBRE EMPRESA",
          country: "Miraflores",
          salary: "$4,000 - $4,500",
          class:
            "w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1",
          icon: "uil uil-star",
          correo: "@ucb.edu.bo",
          nombre: "Nombre",
        },
        {
          id: 3,
          image:
            "https://img.freepik.com/fotos-premium/adorable-bebe-leon-sonrisa-estilo-pixar-ojos-grandes_804788-4863.jpg",
          day: "20th Feb 2023",
          type: "Full Time",
          job: " NOMBRE EMPRESA",
          country: "Miraflores",
          salary: "$4,000 - $4,500",
          class:
            "w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1",
          icon: "uil uil-star",
          correo: "@ucb.edu.bo",
          nombre: "Nombre",
        },
        {
          id: 4,
          image:
            "https://img.freepik.com/fotos-premium/adorable-bebe-leon-sonrisa-estilo-pixar-ojos-grandes_804788-4863.jpg",
          day: "20th Feb 2023",
          type: "Full Time",
          job: " NOMBRE EMPRESA",
          country: "Miraflores",
          salary: "$4,000 - $4,500",
          class:
            "w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1",
          icon: "uil uil-star",
          correo: "@ucb.edu.bo",
          nombre: "Nombre",
        },
        {
          id: 5,
          image:
            "https://img.freepik.com/fotos-premium/adorable-bebe-leon-sonrisa-estilo-pixar-ojos-grandes_804788-4863.jpg",
          day: "20th Feb 2023",
          type: "Full Time",
          job: " NOMBRE EMPRESA",
          country: "Miraflores",
          salary: "$4,000 - $4,500",
          class:
            "w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1",
          icon: "uil uil-star",
          correo: "@ucb.edu.bo",
          nombre: "Nombre",
        },
        {
          image:
            "https://img.freepik.com/fotos-premium/adorable-bebe-leon-sonrisa-estilo-pixar-ojos-grandes_804788-4863.jpg",
          day: "20th Feb 2023",
          type: "Full Time",
          job: " NOMBRE EMPRESA",
          country: "Miraflores",
          salary: "$4,000 - $4,500",
          class:
            "w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1",
          icon: "uil uil-star",
          correo: "@ucb.edu.bo",
          nombre: "Nombre",
        },
      ],
    };
  },
  components: {
    navbar,
    switcher,
    footers,
    vSelect,
    services,
    popularjob,
    cta,
    company,
    question,
    explore,
    counter,
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
    async fetchEmpresas() {
      const loader = this.$loading.show();
      try{
        //getEmpresas(pageValue,sizeValue,searchValue, active, kkid)
        const response = await this.empresaStore.getEmpresas(
          this.currentPage,
          this.pageSize,
          this.searchValue,
          false,
          this.$keycloak.idTokenParsed.sub);
        console.log(response);
        if(response==null){
          this.totalPages = 0;
          this.datas = [];
          return;
        }
        this.totalPages = response.totalPages;
        this.datas = response.content;

      }catch(error){
        console.log(error);
      }finally{
        loader.hide();
      }
    },
    searchEmpresas() {
      this.currentPage = 0;
      this.fetchEmpresas();
    },
    nextPage() {
      if (this.currentPage < this.totalPages - 1) {
        this.currentPage++;
        this.fetchEmpresas();
      }
    },
    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
        this.fetchEmpresas();
      }
    },
    goToPage(page) {
      this.currentPage = page;
      this.fetchEmpresas();
    },
  },
};
</script>

<style lang="scss" scoped>
.map-marker-icon {
  color: #00ff00;
}
</style>
