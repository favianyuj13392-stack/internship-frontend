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
          Empresas
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
                      />
                    </div>

                    <input
                      type="submit"
                      id="search"
                      name="search"
                      style="height: 60px"
                      class="btn bg-cyan-600 hover:bg-cyan-700 border-cyan-600 hover:border-cyan-700 text-white searchbtn submit-btn w-100"
                      value="Buscar"
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

  <div class="container">
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
      <div
        v-for="item in datas"
        :key="item"
        class="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700"
      >
        <div class="relative overflow-hidden h-40">
          <img
            :src="item.image"
            class="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500"
            alt=""
          />
        </div>

        <div class="relative p-6">
          <div class="absolute start-6 -top-4">
            <span
              class="bg-cyan-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5"
              >{{ item.name }}</span
            >
          </div>

          <div class="">
            <div class="flex mb-4">
              <span class="text-slate-400 text-sm"
                ><i
                  class="uil uil-calendar-alt text-slate-900 dark:text-white me-2"
                ></i
                >{{ item.date }}</span
              >
              <span class="text-slate-400 text-sm ms-3"
                ><i
                  class="uil uil-clock text-slate-900 dark:text-white me-2"
                ></i
                >{{ item.time }}</span
              >
            </div>

            <router-link
              class="title text-lg font-semibold hover:text-cyan-600 duration-500 ease-in-out"
              >{{ item.title }}</router-link
            >

            <div class="flex justify-between items-center mt-3">
              <router-link
                to="/empresas/detalle"
                class="btn btn-link hover:text-cyan-600 after:bg-cyan-600 duration-500 ease-in-out"
                >Ver empresa <i class="uil uil-arrow-right"></i
              ></router-link>
              <span class="text-slate-400 text-sm"
                >by
                <a
                  href=""
                  class="text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-600 font-medium"
                  >{{ item.company }}</a
                ></span
              >
            </div>
          </div>
        </div>
      </div>
      <!--end content-->
    </div>
    <!--end grid-->
  </div>
  <!--end container-->
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

export default {
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
      datas: [
        {
          id: 1,
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          day: "20th Feb 2023",
          type: "Full Time",
          job: "Web Designer",
          country: "Australia",
          salary: "$4,000 - $4,500",
          class:
            "w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1",
          icon: "uil uil-star",
          name: "Arts",
          date: "20th February, 2023",
          time: "5 min read",
          title: "11 Tips to Help You Get New Clients Through Cold Calling",
          company: "Google",
        },
        {
          id: 2,
          image:
            "https://img.freepik.com/fotos-premium/adorable-bebe-leon-sonrisa-estilo-pixar-ojos-grandes_804788-4863.jpg",
          day: "20th Feb 2023",
          type: "Part Time",
          job: "Marketing Director",
          country: "USA",
          salary: "$4,000 - $4,500",
          class:
            "w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1",
          icon: "uil uil-star",
          name: "Arts",
          date: "20th February, 2023",
          time: "5 min read",
          title: "11 Tips to Help You Get New Clients Through Cold Calling",
          company: "Google",
        },
        {
          id: 3,
          image:
            "https://img.freepik.com/fotos-premium/adorable-bebe-leon-sonrisa-estilo-pixar-ojos-grandes_804788-4863.jpg",

          day: "20th Feb 2023",
          type: "Remote",
          job: "Application Developer",
          country: "China",
          salary: "$4,000 - $4,500",
          class:
            "w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1",
          name: "Arts",
          date: "20th February, 2023",
          time: "5 min read",
          title: "11 Tips to Help You Get New Clients Through Cold Calling",
          company: "Google",
        },
        {
          id: 4,
          image:
            "https://img.freepik.com/fotos-premium/adorable-bebe-leon-sonrisa-estilo-pixar-ojos-grandes_804788-4863.jpg",

          day: "20th Feb 2023",
          type: "WFH",
          job: "Product Designer",
          country: "Dubai",
          salary: "$4,000 - $4,500",
          class:
            "w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1",
          name: "Arts",
          date: "20th February, 2023",
          time: "5 min read",
          title: "11 Tips to Help You Get New Clients Through Cold Calling",
          company: "Google",
        },
        {
          id: 5,
          image:
            "https://img.freepik.com/fotos-premium/adorable-bebe-leon-sonrisa-estilo-pixar-ojos-grandes_804788-4863.jpg",

          day: "20th Feb 2023",
          type: "Full Time",
          job: "C++ Developer",
          country: "India",
          salary: "$4,000 - $4,500",
          class:
            "w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1",
          icon: "uil uil-star",
          name: "Arts",
          date: "20th February, 2023",
          time: "5 min read",
          title: "11 Tips to Help You Get New Clients Through Cold Calling",
          company: "Google",
        },
        {
          id: 6,
          image:
            "https://img.freepik.com/fotos-premium/adorable-bebe-leon-sonrisa-estilo-pixar-ojos-grandes_804788-4863.jpg",

          day: "20th Feb 2023",
          type: "Remote",
          job: "Php Developer",
          country: "Pakistan",
          salary: "$4,000 - $4,500",
          class:
            "w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1",
          icon: "uil uil-star",
          name: "Arts",
          date: "20th February, 2023",
          time: "5 min read",
          title: "11 Tips to Help You Get New Clients Through Cold Calling",
          company: "Google",
        },
        {
          id: 7,
          image:
            "https://img.freepik.com/fotos-premium/adorable-bebe-leon-sonrisa-estilo-pixar-ojos-grandes_804788-4863.jpg",

          day: "20th Feb 2023",
          type: "Full Time",
          job: "Web Designer",
          country: "Australia",
          salary: "$4,000 - $4,500",
          class:
            "w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1",
          icon: "uil uil-star",
        },
        {
          id: 8,
          image:
            "https://img.freepik.com/fotos-premium/adorable-bebe-leon-sonrisa-estilo-pixar-ojos-grandes_804788-4863.jpg",

          day: "20th Feb 2023",
          type: "Part Time",
          job: "Marketing Director",
          country: "USA",
          salary: "$4,000 - $4,500",
          class:
            "w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1",
        },
        {
          id: 9,
          image:
            "https://img.freepik.com/fotos-premium/adorable-bebe-leon-sonrisa-estilo-pixar-ojos-grandes_804788-4863.jpg",

          day: "20th Feb 2023",
          type: "Remote",
          job: "App Developer",
          country: "China",
          salary: "$4,000 - $4,500",
          class:
            "w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1",
        },
        {
          id: 10,
          image:
            "https://img.freepik.com/fotos-premium/adorable-bebe-leon-sonrisa-estilo-pixar-ojos-grandes_804788-4863.jpg",

          day: "20th Feb 2023",
          type: "WFH",
          job: "Product Designer",
          country: "Dubai",
          salary: "$4,000 - $4,500",
          class:
            "w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1",
        },
        {
          id: 11,
          image:
            "https://img.freepik.com/fotos-premium/adorable-bebe-leon-sonrisa-estilo-pixar-ojos-grandes_804788-4863.jpg",

          day: "20th Feb 2023",
          type: "Full Time",
          job: "C++ Developer",
          country: "India",
          salary: "$4,000 - $4,500",
          class:
            "w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1",
          icon: "uil uil-star",
        },
        {
          id: 12,
          image:
            "https://img.freepik.com/fotos-premium/adorable-bebe-leon-sonrisa-estilo-pixar-ojos-grandes_804788-4863.jpg",

          day: "20th Feb 2023",
          type: "Remote",
          job: "Php Developer",
          country: "Pakistan",
          salary: "$4,000 - $4,500",
          class:
            "w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1",
          icon: "uil uil-star",
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
  },
};
</script>

<style lang="scss" scoped>
.map-marker-icon {
  color: #00ff00;
}
</style>
